import { IsBoolean, IsNumber, IsString } from 'class-validator';
export class CreateItemDto {
    
    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsNumber()
    quantity: string;

    @IsNumber()
    pricePerUnit: string;
    
    @IsBoolean()
    hasImage: boolean

}
