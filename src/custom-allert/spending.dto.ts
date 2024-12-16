import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class spendingDto{
@IsNotEmpty()
@IsString()
Description:string ;


@IsNotEmpty()
@IsNumber()
ammount:number ;


@IsNotEmpty()
@Type(()=>Date)
spentDate:Date;




}