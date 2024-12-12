import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
imports:[TypeOrmModule.forFeature([user])],
providers:[UserService] ,
controllers:[UserController]


})
export class UserModule {}
