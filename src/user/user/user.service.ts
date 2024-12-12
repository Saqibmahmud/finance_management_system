import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './user.entity';
import { Repository } from 'typeorm';
import { user_Dto } from '../user_register_dto.dto';
import * as jwt from 'jsonwebtoken';
import { user_login_Dto } from './user_login_dto.dto';

@Injectable()
export class UserService {


constructor(
    @InjectRepository(user)
private userRepository:Repository<user>
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
 console.log(exist_user);
   const userId= exist_user.id;
    const token =jwt.sign({userId},'secretkey');
    console.log(token);
    return token ;
    }
}

logout(){
    
}





}
