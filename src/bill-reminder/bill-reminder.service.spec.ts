import { Test, TestingModule } from '@nestjs/testing';
import { BillReminderService } from './bill-reminder.service';

describe('BillReminderService', () => {
  let service: BillReminderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillReminderService],
    }).compile();

    service = module.get<BillReminderService>(BillReminderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
