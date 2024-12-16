
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class BillDto {
  @IsNotEmpty()
  @IsString()
  billName: string;

  @IsNotEmpty()
 @Type(()=>Date)
 dueDate:Date; 

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
