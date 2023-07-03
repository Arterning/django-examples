import { Module } from '@nestjs/common';
import { LoveService } from './love.service';
import { LoveController } from './love.controller';

@Module({
  controllers: [LoveController],
  providers: [LoveService],
})
export class LoveModule {}
