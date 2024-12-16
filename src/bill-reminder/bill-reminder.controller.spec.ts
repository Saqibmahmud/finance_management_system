import { Test, TestingModule } from '@nestjs/testing';
import { BillReminderController } from './bill-reminder.controller';

describe('BillReminderController', () => {
  let controller: BillReminderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillReminderController],
    }).compile();

    controller = module.get<BillReminderController>(BillReminderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
