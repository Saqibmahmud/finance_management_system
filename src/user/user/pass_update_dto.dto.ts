import { IsNotEmpty, IsString } from "class-validator";

export class pass_update_Dto{

    @IsNotEmpty() 
    @IsString()
    email:string ;
 
    @IsNotEmpty() 
    @IsString()
     updated_password:string ;

    @IsNotEmpty()
    @IsString()
    OTP:string  ;
}
