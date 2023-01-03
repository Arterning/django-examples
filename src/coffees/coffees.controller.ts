import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('array')
    findAll() {
        return ['abc', 'def']
    }
}
