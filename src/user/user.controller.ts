import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './createUserDto';
import { ForbiddenException } from './exceptions/test.exception';
import { UserService } from './user.service';

@Controller('user')
export class UserContoller {
  constructor(private userService: UserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(createUserDto.userName);
    } catch (error) {
      throw new ForbiddenException();
    }
  }
  @Get('list')
  getUserList() {
    return this.userService.getUsersList;
  }
}
