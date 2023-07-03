import { Injectable } from '@nestjs/common';
import { CreateLoveDto } from './dto/create-love.dto';
import { UpdateLoveDto } from './dto/update-love.dto';
import { Love } from './entities/love.entity';

@Injectable()
export class LoveService {
  private mock: Love[] = [];

  create(createLoveDto: CreateLoveDto) {
    console.log('create');
    return 'This action adds a new love';
  }

  findAll() {
    return `This action returns all love`;
  }

  findOne(id: number) {
    return `This action returns a #${id} love`;
  }

  update(id: number, updateLoveDto: UpdateLoveDto) {
    return `This action updates a #${id} love`;
  }

  remove(id: number) {
    return `This action removes a #${id} love`;
  }
}
