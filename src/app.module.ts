import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './coffees/entities/coffee.entity';
import { Flavor } from './coffees/entities/flavor.entity';

@Module({
  imports: [ShopCartModule,
    TypeOrmModule.forFeature([Coffee, Flavor]),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'1.12.67.61',
      port:5432,
      username:'strapi',
      password:'',
      database:'coffee',
      autoLoadEntities:true,
      synchronize:true,
  })],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
