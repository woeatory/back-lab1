import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async createCategory(name: string) {
    try {
      const category = await this.prisma.category.create({
        data: {
          name: name,
        },
      });
      return category;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getCategoriesList() {
    const users = await this.prisma.category.findMany();
    return users;
  }
}
