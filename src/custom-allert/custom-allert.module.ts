import { Module } from '@nestjs/common';
import { CustomAllertController } from './custom-allert.controller';
import { CustomAllertService } from './custom-allert.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debt_Payments } from '../categoriesOfSpending_Entities/Debt_Payments.entity';
import { Saving_Investments } from '../categoriesOfSpending_Entities/Savings_Investments.entity';
import { Essentials } from '../categoriesOfSpending_Entities/Essentials.entity';
import { Personal_Spendings } from '../categoriesOfSpending_Entities/Personal_Spendings.entity';
import { Transactions } from 'src/budget-tracking/Transaction.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Debt_Payments,Saving_Investments,Essentials,Personal_Spendings,Transactions])],
  controllers: [CustomAllertController],
  providers: [CustomAllertService]
})
export class CustomAllertModule {}
