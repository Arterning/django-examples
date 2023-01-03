/**
 * ? means it is optional
 */
export class UpdateCoffeeDto {
    readonly name ?: string;
    readonly brand ?: string;
    readonly flavors ?: string[];
}
