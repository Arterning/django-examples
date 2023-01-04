import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import {UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {

    private coffeesMock :Coffee[]= [
        {
            id: 1,
            name:'hils',
            brand: 'ning brand',
            flavors: ['sweety']
        }
    ];


    findAll() {
        return this.coffeesMock;
    }

    findOne(id: string) {
        //throw 'a random error'
        const coffee = this.coffeesMock.find(item => item.id === +id);
        if (!coffee) {
            throw new NotFoundException(`Coffee with id ${id} not found`)
        }
        return coffee;
    }

    create(dto : CreateCoffeeDto) {
        //TODO generate id
        this.coffeesMock.push({
            id: 666,
            name:dto.name,
            brand: dto.brand,
            flavors: dto.flavors
        })
    }

    update(id: string, dto: UpdateCoffeeDto) {
        const coffee = this.findOne(id);
        if (coffee) {
            //TODO how to copy attr from dto?, any type is convinient, but not safe. anyway you can implement a crud quicky by this.
            coffee.brand = dto.brand;
            coffee.name = dto.name;
            coffee.flavors = dto.flavors;
        }
    }

    remove(id:string) {
        const coffee = this.findOne(id);
        if (coffee) {
            this.coffeesMock = this.coffeesMock.filter(e => e.id !== +id);
        }
    }


}
