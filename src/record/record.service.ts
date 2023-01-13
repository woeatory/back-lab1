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
    let curr: Currency;
    if (currency !== null) {
      curr = new Currency(currency);
    }
    const record = await this.prisma.record
      .create({
        data: {
          userID: userID,
          categoryID: categoryID,
          date: date,
          amount: amount,
          currency: curr.name,
        },
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
    return record;
  }
  async getRecordByUserID(userID: number) {
    const record = await this.prisma.record
      .findMany({
        where: {
          userID: userID,
        },
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
    if (record.length === 0) throw NOT_FOUND_ERROR;
    return record;
  }
  async getRecordByUserIDandCategory(userID: number, categoryID: number) {
    const record = await this.prisma.record
      .findMany({
        where: {
          userID: userID,
          categoryID: categoryID,
        },
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
    if (record.length === 0) throw NOT_FOUND_ERROR;
    return record;
  }
}
