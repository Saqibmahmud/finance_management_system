import { IsNotEmpty, IsString } from "class-validator";

export class pass_update_Dto{

    @IsNotEmpty() 
    @IsString()
    readonly username:string ;
    
    
    @IsNotEmpty() 
    @IsString()
    readonly password:string ;

    @IsNotEmpty() 
    @IsString()
    readonly updated_password:string ;
}
