import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './createCategoryDto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post('create')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return this.categoryService.createCategory(createCategoryDto.name);
    } catch (error) {
      throw new HttpException(
        'This category already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Get('list')
  getCategoriesList() {
    return this.categoryService.getCategoriesList;
  }
}
