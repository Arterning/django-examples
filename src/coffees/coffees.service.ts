import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
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

    create(dto : any) {
        this.coffeesMock.push(dto)
    }

    update(id: string, dto: any) {
        const coffee = this.findOne(id);
        if (coffee) {
            //TODO how to copy attr from dto?, any type is convinient, but not safe. anyway you can implement a crud quicky by this.
        }
    }

    remove(id:string) {
        const coffee = this.findOne(id);
        if (coffee) {
            this.coffeesMock = this.coffeesMock.filter(e => e.id !== +id);
        }
    }


}
