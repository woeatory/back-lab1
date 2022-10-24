import { Injectable } from '@nestjs/common';
import { Record } from './record.entity';
@Injectable()
export class RecordService {
  private recordsList: Record[] = [];

  createRecord(userID: number, categoryID: number, amount: string) {
    const recordID = this.recordsList.length;
    const newRecord = new Record(recordID, userID, categoryID, amount);
    this.recordsList.push(newRecord);
    return newRecord;
  }
}
