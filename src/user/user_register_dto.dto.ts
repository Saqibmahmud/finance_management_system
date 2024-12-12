import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class user_Dto{




@IsNotEmpty() 
@IsString()
readonly username:string ;


@IsNotEmpty() 
@IsString()
readonly password:string ;

@IsNotEmpty()
 @IsEmail() 
readonly email: string; 


@IsNotEmpty() 
@IsString() 
readonly phoneNumber: string;


@IsNotEmpty() 
@IsString()
readonly full_name:string;



}
