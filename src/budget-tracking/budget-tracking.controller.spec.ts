import { Test, TestingModule } from '@nestjs/testing';
import { BudgetTrackingController } from './budget-tracking.controller';

describe('BudgetTrackingController', () => {
  let controller: BudgetTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetTrackingController],
    }).compile();

    controller = module.get<BudgetTrackingController>(BudgetTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
