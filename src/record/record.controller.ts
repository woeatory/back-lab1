import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
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
    const res = await this.recordService.createRecord(
      userID,
      categoryID,
      date,
      amount,
    );
    return res;
  }

  @Get('search/:id')
  async searchByID(@Param('id', ParseIntPipe) id: number) {
    try {
      const res = await this.recordService.getRecordByUserID(id);
      return res;
    } catch (error) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
  }
  @Get('seachByIDandCategory/:id/:category')
  async seatchByUsedIDandCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('category', ParseIntPipe) category: number,
  ) {
    try {
      const res = await this.recordService.getRecordByUserIDandCategory(
        id,
        category,
      );
      return res;
    } catch (error) {
      throw new HttpException('Record not found', HttpStatus.BAD_REQUEST);
    }
  }
}
