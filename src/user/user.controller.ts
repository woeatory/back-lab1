import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './Dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserContoller {
  constructor(private userService: UserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const res = await this.userService.createUser(createUserDto.userName);
    return res;
  }

  @Get('list')
  async getUserList() {
    const res = this.userService.getUsersList();
    return res;
  }
}
