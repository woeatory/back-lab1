import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './Dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserContoller {
  constructor(private userService: UserService) {}
  @Get('list')
  async getUserList() {
    return await this.userService.getUsersList();
  }
}
