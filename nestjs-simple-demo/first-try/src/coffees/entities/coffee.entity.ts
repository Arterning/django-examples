import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity('coffees')
export class Coffee {
    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column({ default: 0})
    recommendation: number;

    @JoinTable()
    @ManyToMany(type => Flavor,
        (flavor) => flavor.coffees,
        {
            cascade: true
        }
        )
    flavors: Flavor[];
}