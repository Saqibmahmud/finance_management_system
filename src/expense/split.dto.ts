import { IsNotEmpty, IsNumber } from "class-validator";

export class splitDto{
@IsNotEmpty()
@IsNumber()
billID:number ;
@IsNotEmpty()
@IsNumber()
userID:number ;

@IsNotEmpty()
@IsNumber()
ammount:number ;




}