import { Injectable } from '@nestjs/common';
import { Record } from './record.entity';

const NOT_FOUND_ERROR = new Error('Record not found');
@Injectable()
export class RecordService {
  private recordsList: Record[] = [
    new Record(0, 0, 0, '100 UAH'),
    new Record(1, 1, 1, '101 UAH'),
    new Record(2, 2, 2, '102 UAH'),
    new Record(3, 2, 2, '1022 UAH'),
    new Record(4, 2, 0, '1021 UAH'),
  ];

  createRecord(userID: number, categoryID: number, amount: string) {
    const recordID = this.recordsList.length;
    const newRecord = new Record(recordID, userID, categoryID, amount);
    this.recordsList.push(newRecord);
    return newRecord;
  }
  getRecordByUserID(id: number) {
    const result: Record[] = [];
    for (let index = 0; index < this.recordsList.length; index++) {
      const record = this.recordsList[index];
      if (record.userID === id) {
        result.push(record);
      }
    }
    if (result.length === 0) {
      console.error(NOT_FOUND_ERROR);
      throw NOT_FOUND_ERROR;
    }
    return result;
  }
  getRecordByUserIDandCategory(id: number, categoryID: number) {
    const result: Record[] = [];
    for (let index = 0; index < this.recordsList.length; index++) {
      const record = this.recordsList[index];
      if (record.userID === id && record.categoryID === categoryID) {
        result.push(record);
      }
    }
    if (result.length === 0) {
      console.error(NOT_FOUND_ERROR);
      throw NOT_FOUND_ERROR;
    }
    return result;
  }
}
