import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './coffees/entities/coffee.entity';
import { Flavor } from './coffees/entities/flavor.entity';
import { Event } from './events/entities/event.entity';
import 'dotenv/config';
import { CoffeeModule } from './coffees/cofees.module';

@Module({
  imports: [ShopCartModule,CoffeeModule
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.HOST,
      port:5432,
      username:process.env.USER,
      password: process.env.PASS,
      database:'coffee',
      autoLoadEntities:true,
      synchronize:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
