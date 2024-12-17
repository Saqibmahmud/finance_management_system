import { Module } from '@nestjs/common';
import { Expense } from './expense.entity';
import { ExpenseSplitService } from './expense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseController } from './expense.controller';
import { User } from 'src/user/user/user.entity';
import { expense_participants_user } from './expense_participants_user.entity';
import { Transactions } from 'src/budget-tracking/Transaction.entity';

@Module({imports:[TypeOrmModule.forFeature([Expense,User,expense_participants_user,Transactions])],
providers:[ExpenseSplitService] ,
controllers:[ExpenseController]
})
export class ExpenseSplitModule {

}
