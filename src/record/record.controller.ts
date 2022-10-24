import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreaeteRecordDto } from './createRecordDto';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private recordService: RecordService) {}
  @Post('create')
  createRecord(@Body() createRecordDto: CreaeteRecordDto) {
    const userID = createRecordDto.userID;
    const categoryID = createRecordDto.categoryID;
    const amount = createRecordDto.amount;
    return this.recordService.createRecord(userID, categoryID, amount);
  }
  @Get('search/:id')
  searchByID(@Param('id', ParseIntPipe) id: number) {
    return this.recordService.getRecordByUserID(id);
  }
  @Get('seachByIDandCategory/:id/:category')
  seatchByUsedIDandCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('category', ParseIntPipe) category: number,
  ) {
    return this.recordService.getRecordByUserIDandCategory(id, category);
  }
}
