import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';

import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { LoginResponse } from './interfaces';
import { Auth, GetUser } from './decorators';

import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({
    summary: 'SIGNUP',
    description:
      'Public endpoint to sign up a new user. The first account created becomes "admin"; all subsequent accounts get the "user" role.',
  })
  @ApiResponse({ status: 201, description: 'Ok', type: LoginResponse })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Server error' }) //Swagger
  signup(@Body() createUserDto: RegisterUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Post('logout')
  @ApiOperation({
    summary: 'LOGOUT',
    description:
      'Private endpoint. JWTs are stateless, so logout is a client-side token discard; the server-side handler is a no-op that confirms the session.',
  })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'Ok' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Auth()
  logout(): void {
    return;
  }

  @Post('login')
  @ApiOperation({
    summary: 'LOGIN',
    description: 'Public endpoint to login and get the Access Token',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: LoginResponse })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Server error' }) //Swagger
  async login(@Res() response, @Body() loginUserDto: LoginUserDto) {
    const data = await this.authService.loginUser(loginUserDto.email, loginUserDto.password);
    response.status(HttpStatus.OK).send(data);
  }

  @Get('refresh-token')
  @ApiOperation({
    summary: 'REFRESH TOKEN',
    description:
      'Private endpoint allowed for logged in users to refresh the Access Token before it expires.',
  })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Ok', type: LoginResponse })
  @ApiResponse({ status: 401, description: 'Unauthorized' }) //Swagger
  @Auth()
  refreshToken(@GetUser() user: User) {
    return this.authService.refreshToken(user);
  }

  @Get('me')
  @ApiOperation({
    summary: 'ME',
    description: 'Private endpoint returning the currently authenticated user.',
  })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Ok', type: User })
  @ApiResponse({ status: 401, description: 'Unauthorized' }) //Swagger
  @Auth()
  me(@GetUser() user: User) {
    return user;
  }
}
