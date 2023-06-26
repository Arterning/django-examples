import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PostFreeDto {

  @ApiProperty({ description: '旅游地点' })
  @IsString()
  readonly address: string;

  @ApiProperty({ description: '评分' })
  @IsString()
  readonly score: string;

  @ApiProperty({ description: '朋友' })
  @IsString()
  readonly girl: string;
  
  @ApiProperty({ description: '游玩时间' })
  @IsString()
  readonly time: string;

}
