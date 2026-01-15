import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Item extends Model {

    

    @Column
    name: string


    @Column
    type: string

    @Column
    quantity: number

    @Column
    pricePerUnit: number

    @Column
    hasImage: boolean

}

