import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Expense } from 'src/expense/expense.entity';

@Module({
imports:[TypeOrmModule.forFeature([User,Expense])],
providers:[UserService] ,
controllers:[UserController]


})
export class UserModule {}
