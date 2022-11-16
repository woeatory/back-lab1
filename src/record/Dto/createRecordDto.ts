import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreaeteRecordDto {
  @IsNumber()
  userID: number;
  @IsNumber()
  categoryID: number;
  @IsString()
  amount: string;
  @IsOptional()
  @IsDateString()
  date?: Date;
}
