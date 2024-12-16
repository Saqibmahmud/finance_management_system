import { Module } from '@nestjs/common';
import { BudgetTrackingController } from './budget-tracking.controller';
import { BudgetTrackingService } from './budget-tracking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debt_Payments } from 'src/categoriesOfSpending_Entities/Debt_Payments.entity';
import { Saving_Investments } from 'src/categoriesOfSpending_Entities/Savings_Investments.entity';
import { Essentials } from 'src/categoriesOfSpending_Entities/Essentials.entity';
import { Personal_Spendings } from 'src/categoriesOfSpending_Entities/Personal_Spendings.entity';
import { Transactions } from './Transaction.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Debt_Payments,Saving_Investments,Essentials,Personal_Spendings,Transactions])],
  controllers: [BudgetTrackingController],
  providers: [BudgetTrackingService]
})
export class BudgetTrackingModule {}
