import { Module } from '@nestjs/common';
import { AnalyseSpendingController } from './analyse-spending.controller';
import { AnalyseSpendingService } from './analyse-spending.service';
import { Debt_Payments } from 'src/categoriesOfSpending_Entities/Debt_Payments.entity';
import { Saving_Investments } from 'src/categoriesOfSpending_Entities/Savings_Investments.entity';
import { Essentials } from 'src/categoriesOfSpending_Entities/Essentials.entity';
import { Personal_Spendings } from 'src/categoriesOfSpending_Entities/Personal_Spendings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Debt_Payments,Saving_Investments,Essentials,Personal_Spendings])],
  controllers: [AnalyseSpendingController],
  providers: [AnalyseSpendingService]
})
export class AnalyseSpendingModule {}
