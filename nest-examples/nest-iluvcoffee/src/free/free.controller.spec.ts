import { Test, TestingModule } from '@nestjs/testing';
import { FreeController } from './free.controller';

describe('FreeController', () => {
  let controller: FreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreeController],
    }).compile();

    controller = module.get<FreeController>(FreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
