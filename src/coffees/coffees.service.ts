import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entity';
import { Connection } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import {UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Injectable()
export class CoffeesService {


    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository:Repository<Coffee>,
        @InjectRepository(Coffee)
        private readonly flavorRepository:Repository<Flavor>,
        private readonly connection: Connection,) {

    }

    findAll(pageQuery: PaginationQueryDto) {
        return this.coffeeRepository.find({
            relations: ['flavors'],
            skip: pageQuery.offset,
            take: pageQuery.limit
        });
    }

    async findOne(id: string) {
        //throw 'a random error'
        const coffee = await this.coffeeRepository.findOne({
            relations:['flavors'],
            where: {
                id: Number(id)
            }
        });
        if (!coffee) {
            throw new NotFoundException(`Coffee with id ${id} not found`)
        }
        return coffee;
    }

    async create(dto : CreateCoffeeDto) {

        const flavors = await Promise.all(
            dto.flavors.map(e => this.preloadFlavorByName(e))
        );

        //TODO generate id
        const coffee = this.coffeeRepository.save({
            ...dto, 
            flavors
        });
        return coffee;
    }

    async update(id: string, dto: UpdateCoffeeDto) {
        let flavors;
        if (dto.flavors) {
            flavors = Promise.all(flavors.map(e => this.preloadFlavorByName(e)));
        }

        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...dto,
            flavors
        });
        if (!coffee) {
            throw new NotFoundException(`Coffee with id ${id} not found`)
        }
        this.coffeeRepository.save(coffee);
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


    private async preloadFlavorByName(name: string): Promise<Flavor> {

        const flavor = await this.flavorRepository.findOneBy({ name });
        if (!flavor) {
            return this.flavorRepository.create({ name })
        }
    }


    /**
     * use transaction
     * @param coffee 
     */
    async recommendCoffee(coffee: Coffee) {

        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            
            coffee.recommendation ++ ;
            const event = new Event();
            event.name = 'recommend coffee';
            event.type = 'coffee';
            event.payload = {coffeeId: coffee.id};

            await queryRunner.manager.save(coffee);
            await queryRunner.manager.save(event);
        } catch (error) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    }
}
