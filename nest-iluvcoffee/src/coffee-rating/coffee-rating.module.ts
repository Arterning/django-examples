import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    CoffeesModule,
    DatabaseModule.register({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      username: 'postgres',
      password: 'postgres',
      port: Number(process.env.DATABASE_PORT),
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
