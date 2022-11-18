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
      return user;
    } catch (error) {
      const err = new Error('This user already exists');
      console.error(err);
      return err.message;
    }
  }
  async getUsersList() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
