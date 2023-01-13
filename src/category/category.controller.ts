import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './Dto/createCategoryDto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post('create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      const res = await this.categoryService.createCategory(
        createCategoryDto.name,
      );
      return res;
    } catch (error) {
      throw new HttpException(`error`, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('list')
  async getCategoriesList() {
    return await this.categoryService.getCategoriesList();
  }
}
