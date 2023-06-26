import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cat')
export class Cat {

    @PrimaryGeneratedColumn({
        comment: '自增ID'
    })
    id: number;

    @ApiProperty({
        description: 'nickname',
        default: 'nickname'
    })
    @Column({
        comment: 'nickname'
    })
    nickname: string;

    @ApiProperty({
        description: '品种',
        default: '品种'
    })
    @Column({
        comment: '品种'
    })
    species: string;
}