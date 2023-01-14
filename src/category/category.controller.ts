import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './Dto/createCategoryDto';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @UseGuards(JwtGuard)
  @Post('create')
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @GetUser() user: User,
  ) {
    try {
      const res = await this.categoryService.createCategory(
        createCategoryDto.name,
        user.id,
      );
      return res;
    } catch (error) {
      throw new HttpException(`error`, HttpStatus.BAD_REQUEST);
    }
  }
  @UseGuards(JwtGuard)
  @Get('list')
  async getCategoriesList() {
    return await this.categoryService.getCategoriesList();
  }
}
