import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
    imports: [],
    providers: [CoffeesService],
    controllers: [CoffeesController]
  })
export class CoffeeModule {}
