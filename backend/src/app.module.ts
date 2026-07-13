import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { validateConfig } from './common/config/env.config';
import { HealthModule } from './health/health.module';
import { RecipesModule } from './recipes/recipes.module';
import { SettingsModule } from './settings/settings.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => validateConfig(config),
    }),
    // Serve the built Angular SPA. In the production image the frontend build
    // output is copied to `/app/client` (sibling of the compiled `dist/`), so
    // resolving from __dirname (/app/dist) → ../client points at it. `/api*`
    // routes are excluded so the JSON API is never shadowed by the SPA fallback.
    ServeStaticModule.forRoot({
      rootPath: process.env.STATIC_ROOT || join(__dirname, '..', 'client'),
      serveRoot: '/',
      exclude: ['/api/{*path}'],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [{
        ttl: config.get<number>('THROTTLE_TTL', 60000),
        limit: config.get<number>('THROTTLE_LIMIT', 100),
      }],
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    HealthModule,
    RecipesModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
