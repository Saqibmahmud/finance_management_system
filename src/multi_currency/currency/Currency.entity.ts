import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Currency')
export class Currency{
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    code:string ;

    @Column('float')
    rate:number;

    @Column()
    lastUpdated_date:Date ;
}