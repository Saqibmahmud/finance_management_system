import { Module } from '@nestjs/common';
import { CustomAllertController } from './custom-allert.controller';
import { CustomAllertService } from './custom-allert.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debt_Payments } from './categoriesOfSpending/Debt_Payments.entity';
import { Saving_Investments } from './categoriesOfSpending/Savings_Investments.entity';
import { Essentials } from './categoriesOfSpending/Essentials.entity';
import { Personal_Spendings } from './categoriesOfSpending/Personal_Spendings.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Debt_Payments,Saving_Investments,Essentials,Personal_Spendings])],
  controllers: [CustomAllertController],
  providers: [CustomAllertService]
})
export class CustomAllertModule {}
