import { Test, TestingModule } from '@nestjs/testing';
import { LoveService } from './love.service';

describe('LoveService', () => {
  let service: LoveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoveService],
    }).compile();

    service = module.get<LoveService>(LoveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
