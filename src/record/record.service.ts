import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Currency } from './entities/currency.entity';

const NOT_FOUND_ERROR: Error = new Error('Record not found');
@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}
  async createRecord(
    userID: number,
    categoryID: number,
    date: Date,
    amount: number,
    currency?: string,
  ) {
    try {
      let curr: Currency;
      if (currency !== null) {
        curr = new Currency(currency);
      }
      const record = await this.prisma.record.create({
        data: {
          userID: userID,
          categoryID: categoryID,
          date: date,
          amount: amount,
          currency: curr.name,
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
