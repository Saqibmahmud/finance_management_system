import { IsNotEmpty, IsString } from "class-validator";

export class user_login_Dto{




    @IsNotEmpty() 
    @IsString()
    readonly username:string ;
    
    
    @IsNotEmpty() 
    @IsString()
    readonly password:string ;
}