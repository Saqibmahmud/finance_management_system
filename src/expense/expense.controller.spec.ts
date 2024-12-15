import { Test, TestingModule } from '@nestjs/testing';
import { EpenseController } from './expense.controller';

describe('EpenseController', () => {
  let controller: EpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpenseController],
    }).compile();

    controller = module.get<EpenseController>(EpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
