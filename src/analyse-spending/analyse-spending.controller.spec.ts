import { Test, TestingModule } from '@nestjs/testing';
import { AnalyseSpendingController } from './analyse-spending.controller';

describe('AnalyseSpendingController', () => {
  let controller: AnalyseSpendingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyseSpendingController],
    }).compile();

    controller = module.get<AnalyseSpendingController>(AnalyseSpendingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
