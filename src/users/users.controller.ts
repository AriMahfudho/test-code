import { Controller, Post, Body, Get, Put, Param, UseGuards } from '@nestjs/common';
import { UserService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
// import { AuthGuard } from '@nestjs/passport'; // Import AuthGuard

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<{ token: string }> {
    const { token } = await this.userService.login(loginUserDto);
    return { token };
  }


}
