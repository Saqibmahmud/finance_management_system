import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyModule } from './multi_currency/currency/currency.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user/user.module';
import { ExpenseSplitModule } from './expense/expense.module';
import { DebtModule } from './debt/debt.module';
import { CustomAllertModule } from './custom-allert/custom-allert.module';
import { BudgetTrackingModule } from './budget-tracking/budget-tracking.module';
import { AnalyseSpendingModule } from './analyse-spending/analyse-spending.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'saqib123',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }) ,CurrencyModule,UserModule,ExpenseSplitModule, DebtModule, CustomAllertModule, BudgetTrackingModule, AnalyseSpendingModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
