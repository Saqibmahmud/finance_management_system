import {  IsArray, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";


export class expenseDto{
@IsNotEmpty()
@IsString()
description: string ;

@IsNotEmpty()
@IsNumber()
totalAmmount:number ;

@IsObject() 
shares:{[user_name:string]:number} ;

@IsArray()
 participants: number[]; 
}


