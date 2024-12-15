import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class debtDto{



 @IsNumber()
    debtid:number ;

@IsNotEmpty()
@IsString()
debt_taker:string ;

@IsNotEmpty()
@IsNumber()
debtAmmount:number;

@IsNotEmpty()
@Type(()=>Date)
returnDate:Date ;


getNotified:boolean ;


}