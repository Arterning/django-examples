import { Injectable } from '@nestjs/common';
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
        return this.coffeesMock.find(item => item.id === +id);
    }

    create(dto : any) {
        this.coffeesMock.push(dto)
    }

    update(id: string, dto: any) {
        const coffee = this.findOne(id);
        if (coffee) {
            //how to copy attr from dto?, any type is convinient, but not safe. anyway you can implement a crud quicky by this.
        }
    }

    remove(id:string) {
        const coffee = this.findOne(id);
        if (coffee) {
            this.coffeesMock = this.coffeesMock.filter(e => e.id !== +id);
        }
    }


}
