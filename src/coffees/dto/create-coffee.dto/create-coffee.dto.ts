//nest g class coffees/dto/create-coffee.dto --no-spec
export class CreateCoffeeDto {
    readonly name: string;
    readonly brand: string;
    readonly flavors: string[];
}
