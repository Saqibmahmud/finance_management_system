import { Module } from '@nestjs/common';
import { Expense } from './expense.entity';
import { ExpenseSplitService } from './expense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseController } from './expense.controller';
import { UserModule } from 'src/user/user/user.module';
import { User } from 'src/user/user/user.entity';
import { expense_participants_user } from './expense_participants_user.entity';

@Module({imports:[TypeOrmModule.forFeature([Expense,User,expense_participants_user])],
providers:[ExpenseSplitService] ,
controllers:[ExpenseController]
})
export class ExpenseSplitModule {

}
