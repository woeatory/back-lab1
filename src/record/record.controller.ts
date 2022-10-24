import { Body, Controller, Post } from '@nestjs/common';
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
}
