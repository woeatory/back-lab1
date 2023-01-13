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
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const res = await this.userService.createUser(createUserDto.userName);
      return res;
    } catch (error) {
      throw new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('list')
  async getUserList() {
    return await this.userService.getUsersList();
  }
}
