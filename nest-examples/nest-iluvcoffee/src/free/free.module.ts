import { Module } from '@nestjs/common';
import { FreeController } from './free.controller';
import { FreeService } from './free.service';

@Module({
  controllers: [FreeController],
  providers: [FreeService]
})
export class FreeModule {}
