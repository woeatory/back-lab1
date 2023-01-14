import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreaeteRecordDto {
  @IsNumber()
  categoryID: number;
  @IsNumber()
  amount: number;
  @IsOptional()
  @IsString()
  currency: string;
  @IsOptional()
  @IsDateString()
  date?: Date;
}
