import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

const NOT_FOUND_ERROR: Error = new Error('Record not found');
@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}
  async createRecord(
    userID: number,
    categoryID: number,
    date: Date,
    amount: string,
  ) {
    try {
      const record = await this.prisma.record.create({
        data: {
          userID: userID,
          categoryID: categoryID,
          date: date,
          amount: 100,
        },
      });
      return record;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getRecordByUserID(userID: number) {
    try {
      const record = await this.prisma.record.findMany({
        where: {
          userID: userID,
        },
      });
      if (record.length === 0) throw NOT_FOUND_ERROR;
      return record;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getRecordByUserIDandCategory(userID: number, categoryID: number) {
    try {
      const record = await this.prisma.record.findMany({
        where: {
          userID: userID,
          categoryID: categoryID,
        },
      });
      if (record.length === 0) throw NOT_FOUND_ERROR;
      return record;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
