import { Test, TestingModule } from '@nestjs/testing';
import { BudgetTrackingService } from './budget-tracking.service';

describe('BudgetTrackingService', () => {
  let service: BudgetTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetTrackingService],
    }).compile();

    service = module.get<BudgetTrackingService>(BudgetTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
