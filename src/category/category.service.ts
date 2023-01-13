import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async createCategory(name: string) {
    const category = await this.prisma.category
      .create({
        data: {
          name: name,
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
