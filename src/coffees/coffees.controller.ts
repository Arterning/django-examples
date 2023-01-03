import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Query, Patch, Delete} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService) {

    }

    @Get()
    findAll(@Query() pageQuery) {
        //const {limit, offset} = pageQuery;
        return this.coffeeService.findAll();
    }

    /**
     * dynamic route param
     * @param params 
     * @returns 
     */
    @Get(':id')
    findOne(@Param('id') id :string) {
        return this.coffeeService.findOne(id)
    }


    /**
     * note recommend nest js will also generate status code
     * @param response
     */
    @Get('two')
    findTwo(@Res() response) {
        response.status(200).send("hi ,how are you")
    }


    @Post()
    create(@Body() body : CreateCoffeeDto) {
        return this.coffeeService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id :string, @Body() body: UpdateCoffeeDto) {
        return this.coffeeService.update(id, body)
    }


    @Delete(':id')
    delete(@Param('id') id :string) {
        return this.coffeeService.remove(id)
    }

}
