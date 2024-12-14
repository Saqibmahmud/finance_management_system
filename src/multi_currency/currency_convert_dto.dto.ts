import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class convert_currencyDto{

@IsNotEmpty()
@IsString()
from:string ;

@IsNotEmpty()
@IsString()
to:string ;



@IsNotEmpty()
@IsNumber()
ammount:number ;






}