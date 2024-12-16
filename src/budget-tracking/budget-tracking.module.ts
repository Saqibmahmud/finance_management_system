import { Module } from '@nestjs/common';
import { BudgetTrackingController } from './budget-tracking.controller';
import { BudgetTrackingService } from './budget-tracking.service';

@Module({
  controllers: [BudgetTrackingController],
  providers: [BudgetTrackingService]
})
export class BudgetTrackingModule {}
