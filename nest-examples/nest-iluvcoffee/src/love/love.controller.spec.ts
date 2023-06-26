import { Test, TestingModule } from '@nestjs/testing';
import { LoveController } from './love.controller';
import { LoveService } from './love.service';

describe('LoveController', () => {
  let controller: LoveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoveController],
      providers: [LoveService],
    }).compile();

    controller = module.get<LoveController>(LoveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
