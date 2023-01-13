import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreaeteRecordDto } from './Dto/createRecordDto';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private recordService: RecordService) {}
  @Post('create')
  async createRecord(@Body() createRecordDto: CreaeteRecordDto) {
    const userID = createRecordDto.userID;
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

  @Get(':id')
  async searchByID(@Param('id', ParseIntPipe) id: number) {
    try {
      const res = await this.recordService.getRecordByUserID(id);
      return res;
    } catch (error) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
  }
  @Get(':userId/:categoryId')
  async seatchByUsedIDandCategory(@Param() params) {
    try {
      const res = await this.recordService.getRecordByUserIDandCategory(
        parseInt(params.userId),
        parseInt(params.categoryId),
      );
      return res;
    } catch (error) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
  }
}
