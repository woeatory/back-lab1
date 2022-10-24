import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserContoller {
  constructor(private userService: UserService) {}
  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto.userName);
  }
}
