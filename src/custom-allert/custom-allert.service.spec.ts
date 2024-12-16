import { Test, TestingModule } from '@nestjs/testing';
import { CustomAllertService } from './custom-allert.service';

describe('CustomAllertService', () => {
  let service: CustomAllertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomAllertService],
    }).compile();

    service = module.get<CustomAllertService>(CustomAllertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
