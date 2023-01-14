import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreaeteRecordDto } from './Dto/createRecordDto';
import { RecordService } from './record.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@Controller('record')
export class RecordController {
  constructor(private recordService: RecordService) {}
  @UseGuards(JwtGuard)
  @Post('create')
  async createRecord(
    @Body() createRecordDto: CreaeteRecordDto,
    @GetUser() user: User,
  ) {
    const userID = user.id;
    const categoryID = createRecordDto.categoryID;
    const date = createRecordDto.date;
    const amount = createRecordDto.amount;
    const currency = createRecordDto.currency;
    const res = await this.recordService.createRecord(
      userID,
      categoryID,
      date,
      amount,
      currency,
    );
    return res;
  }
  @UseGuards(JwtGuard)
  @Get('')
  async searchByID(@GetUser() user: User) {
    try {
      const res = await this.recordService.getRecordByUserID(user.id);
      return res;
    } catch (error) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
  }
  @UseGuards(JwtGuard)
  @Get(':categoryId')
  async seatchByUsedIDandCategory(@Param() params, @GetUser() user: User) {
    try {
      const res = await this.recordService.getRecordByUserIDandCategory(
        user.id,
        parseInt(params.categoryId),
      );
      return res;
    } catch (error) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
  }
}
