import { Module } from '@nestjs/common';
import { BillReminderController } from './bill-reminder.controller';
import { BillReminderService } from './bill-reminder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bills_reminder } from './bill_reminder.entity';

@Module({
  imports:[TypeOrmModule.forFeature([bills_reminder])],
  controllers: [BillReminderController],
  providers: [BillReminderService]
})
export class BillReminderModule {}
