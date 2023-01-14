import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async createCategory(name: string, userId: number) {
    const category = await this.prisma.category
      .create({
        data: {
          name: name,
          userID: userId,
        },
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
    console.log('created category', { category });
    return category;
  }
  async getCategoriesList() {
    return await this.prisma.category.findMany();
  }
}
