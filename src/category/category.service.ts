import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  private categoriesList: Category[] = [];

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
