import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { user_Dto } from './user_register_dto.dto';
import * as jwt from 'jsonwebtoken';
import { user_login_Dto } from './user_login_dto.dto';
import { pass_update_Dto } from './pass_update_dto.dto';
import { MailService } from 'src/Mail/mail.service';

@Injectable()
export class UserService {

constructor(
    @InjectRepository(User)
private userRepository:Repository<User>, private mailerService:MailService
){}


async createUser(user_dto:user_Dto ){
    const{username}=user_dto ;
    const{password}=user_dto;
    const{full_name}=user_dto;
    const{email}=user_dto;
    const{phoneNumber}=user_dto;
   
 const exist_user=await this.userRepository.findOne({ where: {username:username}}) ;
//   console.log("recieved user",exist_user);
  if(exist_user!=null){
    throw new HttpException("user already exist",HttpStatus.BAD_REQUEST)
  }
  else{
  let   privacyPolicyAccepted=true ; //ekhonkar jonno
  const new_user= this.userRepository.create({username,password,email,phoneNumber,full_name, privacyPolicyAccepted}) ;
  await this.userRepository.save(new_user) ;
  return "New user created" ;}



}



async login (user_login_dto:user_login_Dto){
    const{username}=user_login_dto ;
    const{password}=user_login_dto;
    

    const exist_user=await this.userRepository.findOne({ where: {username:username,password:password}}) ;
    if(exist_user==null) {
        throw new HttpException("Invalid credentials",HttpStatus.UNAUTHORIZED);
       
    } else{
//  console.log(exist_user);
   const userId= exist_user.id;
   const  token =jwt.sign({userId},'secretkey');
    // console.log(token);
    return {message:"Lofin Succesfull",token} ;

    
    }
}

//sendotp
async otp_gennerate(userid:number){
    const exist_user=await this.userRepository.findOne({ where: {id:userid}}) ;
    if (!exist_user){
        throw new HttpException("Invalid credentials",HttpStatus.UNAUTHORIZED);
    }
    else{
        const otp=Math.floor(1000 + Math.random() * 9000).toString();
        exist_user.otp=otp ;
        await this.userRepository.save(exist_user) ;
        this.mailerService.sendOtp(exist_user.email,otp) ;
        return "OTP sent to your email" ;
    }

}


// passupdate with otp
async update_password(pass_update_dto:pass_update_Dto,userId:number){
    
   
    const{updated_password,email,OTP}=pass_update_dto ;
   
    const exist_user=await this.userRepository.findOne({ where: {id:userId,email:email}}) ;
    if (!exist_user){
        throw new HttpException("Invalid credentials",HttpStatus.UNAUTHORIZED);
    }
    else{
        this.otp_gennerate(userId) ;
        
        if(OTP!=exist_user.otp){
            throw new HttpException("Invalid OTP",HttpStatus.UNAUTHORIZED);
        }
        else{
        exist_user.password=updated_password ;
       await  this.userRepository.save(exist_user) ;
       return exist_user ;
            
    }
    }

    

}


async deleteUser(userId: number)
{ const result = await this.userRepository.delete(userId); 
    if (result.affected === 0) 
        { throw new HttpException('User not found', HttpStatus.NOT_FOUND);

         } 
         return 'User deleted successfully';


        }




}