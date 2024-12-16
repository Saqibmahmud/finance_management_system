import { Test, TestingModule } from '@nestjs/testing';
import { AnalyseSpendingService } from './analyse-spending.service';

describe('AnalyseSpendingService', () => {
  let service: AnalyseSpendingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyseSpendingService],
    }).compile();

    service = module.get<AnalyseSpendingService>(AnalyseSpendingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
