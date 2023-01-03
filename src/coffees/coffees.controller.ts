import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('array')
    findAll(@Query() pageQuery) {
        const { limit , offset } = pageQuery;
        return ['abc', 'def', limit, offset]
    }

    /**
     * dynamic route param
     * @param params 
     * @returns 
     */
    @Get('obj/:id')
    findOne(@Param() params) {
        return `The id you passed is ${params.id}`;
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
    @HttpCode(HttpStatus.GONE)
    create(@Body('name') body) {
        return body;
    }

}
