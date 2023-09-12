import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninUserRequest, SigninUserResponse } from './types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.UsersService.create(createUserDto);
  }

  @ApiBody({type: SigninUserRequest})
  @ApiResponse({type: SigninUserResponse})
  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  signin(@Request() req) {
    return { user: req.user, message: 'Успешная авторизация' };
  }

  @Get('/signin-check')
  @UseGuards(AuthGuard)
  signinCheck(@Request() req) {
    return req.user;
  }

  @Get('/logout')
  logout(@Request() req) {
    req.session.destroy();
    return {message: "Вы вышли из аккаунта"};
  }
}
