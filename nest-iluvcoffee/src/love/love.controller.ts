import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoveService } from './love.service';
import { CreateLoveDto } from './dto/create-love.dto';
import { UpdateLoveDto } from './dto/update-love.dto';

@Controller('love')
export class LoveController {
  constructor(private readonly loveService: LoveService) {}

  @Post()
  create(@Body() createLoveDto: CreateLoveDto) {
    return this.loveService.create(createLoveDto);
  }

  @Get()
  findAll() {
    return this.loveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoveDto: UpdateLoveDto) {
    return this.loveService.update(+id, updateLoveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loveService.remove(+id);
  }
}
