import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm/repository/Repository';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import {UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {


    constructor(@InjectRepository(Coffee) private readonly coffeeRepository:Repository<Coffee>) {

    }

    findAll() {
        return this.coffeeRepository.find();
    }

    async findOne(id: string) {
        //throw 'a random error'
        const coffee = await this.coffeeRepository.findOneById(id);
        if (!coffee) {
            throw new NotFoundException(`Coffee with id ${id} not found`)
        }
        return coffee;
    }

    create(dto : CreateCoffeeDto) {
        //TODO generate id
        const coffee = this.coffeeRepository.save(dto);
        return coffee;
    }

    async update(id: string, dto: UpdateCoffeeDto) {
        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...dto
        });
        if (!coffee) {
            throw new NotFoundException(`Coffee with id ${id} not found`)
        }
        if (coffee) {
            this.coffeeRepository.save(dto);
        }
    }

    async remove(id:string) {
        const coffee = await this.findOne(id);
        if (coffee) {
            this.coffeeRepository.remove(coffee);
        }
    }


    // oldRemove() {
    //     const index = array.findIndex(item => item.id === id);
    //     if (index >= 0) {
    //         array.splice(index, 1);
    //     }
    // }


}
