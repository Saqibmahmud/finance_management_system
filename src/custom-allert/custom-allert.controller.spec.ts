import { Test, TestingModule } from '@nestjs/testing';
import { CustomAllertController } from './custom-allert.controller';

describe('CustomAllertController', () => {
  let controller: CustomAllertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomAllertController],
    }).compile();

    controller = module.get<CustomAllertController>(CustomAllertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
