import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(userName: string) {
    try {
      const user = await this.prisma.user.create({
        data: {
          userName: userName,
        },
      });
      console.log('created new user', user);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUsersList() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
