import { IsDate, isDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class currencyDto{

 
    @IsString()
    readonly code:string ;
    
    
   
    @IsNumber()
    readonly rate:number ;

    @IsDate()
    lastUpdated_date:Date ;
}