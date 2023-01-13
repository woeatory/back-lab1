import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUsersList() {
    const users = await this.prisma.user.findMany({
      select: { username: true },
    });
    return users;
  }
}
