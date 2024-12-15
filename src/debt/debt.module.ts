import { Module } from '@nestjs/common';
import { DebtController } from './debt.controller';
import { DebtService } from './debt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debt } from './debt.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Debt])],
  controllers: [DebtController],
  providers: [DebtService]
})
export class DebtModule {}
