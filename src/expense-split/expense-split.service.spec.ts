import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseSplitService } from './expense-split.service';

describe('ExpenseSplitService', () => {
  let service: ExpenseSplitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseSplitService],
    }).compile();

    service = module.get<ExpenseSplitService>(ExpenseSplitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
