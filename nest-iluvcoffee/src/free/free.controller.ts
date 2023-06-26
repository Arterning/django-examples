import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { PostFreeDto } from './dto/post-free.dto';
import { FreeService } from './free.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('free')
@Controller('free')
export class FreeController {

  constructor(private readonly freeService:FreeService) {

  }

  @Get('findAll')
  findAll() {
    return this.freeService.findAll();
  }

  @Post('post')
  post(@Body() request: PostFreeDto) {
    this.freeService.create(request);
  }


  @Patch('patch')
  patch(@Body() request: PostFreeDto){
    this.freeService.update(request);
  }


}
