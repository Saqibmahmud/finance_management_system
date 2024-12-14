import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyModule } from './multi_currency/currency/currency.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user/user.module';
import { ExpenseSplitService } from './expense-split/expense-split.service';


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
      
    }) ,CurrencyModule,UserModule],
  controllers: [AppController],
  providers: [AppService, ExpenseSplitService],
})
export class AppModule {}
