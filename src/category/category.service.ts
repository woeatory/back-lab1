import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  private categoriesList: Category[] = [
    new Category(0, 'products'),
    new Category(1, 'transport'),
    new Category(2, 'games'),
  ];

  createCategory(name: string) {
    const categoryID = this.categoriesList.length;
    const newCategory = new Category(categoryID, name);
    this.categoriesList.push(newCategory);
    return newCategory;
  }
  get getCategoriesList() {
    return this.categoriesList;
  }
}
