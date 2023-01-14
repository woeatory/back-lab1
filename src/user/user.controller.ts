import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
@Controller('user')
export class UserContoller {
  constructor(private userService: UserService) {}
  @UseGuards(JwtGuard)
  @Get('list')
  async getUserList() {
    return await this.userService.getUsersList();
  }
}
