import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './createCategoryDto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post('create')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto.name);
  }
  @Get('list')
  getCategoriesList() {
    return this.categoryService.getCategoriesList;
  }
}
