import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

// Postgres/Prisma connectivity error codes → the DB is unreachable (map to 503).
const DB_UNAVAILABLE_CODES = new Set([
  'P1000', // authentication failed
  'P1001', // can't reach database server
  'P1002', // database server timed out
  'P1008', // operation timed out
  'P1017', // server closed the connection
]);

/**
 * Global exception filter.
 * - HttpExceptions pass through unchanged (preserves controller/guard status).
 * - Prisma "record not found" (P2025) → 404.
 * - Prisma connectivity / initialization errors → 503 (DB unavailable).
 * - Everything else → 500.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('AllExceptionsFilter');

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      response.status(status).json(this.body(status, exception.getResponse(), request.url));
      return;
    }

    const err = exception as { code?: string; name?: string; message?: string };

    if (err?.code === 'P2025') {
      response
        .status(HttpStatus.NOT_FOUND)
        .json(this.body(HttpStatus.NOT_FOUND, 'Resource not found', request.url));
      return;
    }

    if (
      (err?.code && DB_UNAVAILABLE_CODES.has(err.code)) ||
      err?.name === 'PrismaClientInitializationError' ||
      err?.name === 'PrismaClientRustPanicError'
    ) {
      this.logger.error(`Database unavailable: ${err?.name ?? ''} ${err?.message ?? ''}`);
      response
        .status(HttpStatus.SERVICE_UNAVAILABLE)
        .json(
          this.body(
            HttpStatus.SERVICE_UNAVAILABLE,
            'Service temporarily unavailable, please try again later',
            request.url,
          ),
        );
      return;
    }

    this.logger.error(`Unhandled exception: ${err?.message ?? String(exception)}`);
    response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(this.body(HttpStatus.INTERNAL_SERVER_ERROR, 'Server error', request.url));
  }

  private body(statusCode: number, message: unknown, path: string) {
    const msg =
      message && typeof message === 'object' && 'message' in message
        ? (message as { message: unknown }).message
        : message;
    return { statusCode, message: msg, path };
  }
}
