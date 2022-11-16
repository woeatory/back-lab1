import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Category } from './category.entity';

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
// export class CategoryService {
//   private categoriesList: Category[] = [
//     new Category(0, 'products'),
//     new Category(1, 'transport'),
//     new Category(2, 'games'),
//   ];

//   createCategory(name: string) {
//     const categoryID = this.categoriesList.length;
//     for (const cat of this.categoriesList) {
//       if (cat.name.toLowerCase() === name.toLowerCase() || cat.name === name) {
//         throw new Error('This category already exists');
//       }
//     }
//     const newCategory = new Category(categoryID, name);
//     this.categoriesList.push(newCategory);
//     return newCategory;
//   }
//   get getCategoriesList() {
//     if (this.categoriesList.length === 0) {
//       return 'Category list is empry';
//     }
//     return this.categoriesList;
//   }
// }
