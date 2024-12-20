import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Expense } from 'src/expense/expense.entity';

import { MailModule } from 'src/Mail/mail.module';

@Module({
imports:[TypeOrmModule.forFeature([User,Expense]),MailModule],
providers:[UserService] ,
controllers:[UserController]


})
export class UserModule {}
