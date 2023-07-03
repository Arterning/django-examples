import { Injectable } from '@nestjs/common';
import { PostFreeDto } from './dto/post-free.dto';
import { FreeEntity } from './entities/free.entity';

@Injectable()
export class FreeService {
  private data: Array<FreeEntity> = [];
  private test: FreeEntity[] = [];

  update(request: PostFreeDto) {
    const exist: FreeEntity = this.findByAddress(request.address);
    exist.score = request.score;
  }

  create(request: PostFreeDto) {
    this.data.push({
      ...request,
    } as any);
  }

  findAll() {
    return this.data;
  }

  findByAddress(address: string): FreeEntity {
    return this.data.find((item) => item.address === address);
  }

  delete(address: string) {
    const index = this.data.findIndex((item) => item.address === address);
    this.data.splice(index, 1);
  }
}
