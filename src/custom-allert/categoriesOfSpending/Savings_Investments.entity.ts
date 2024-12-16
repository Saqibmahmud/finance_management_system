import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Saving_Investments')
export class Saving_Investments{
@PrimaryGeneratedColumn()
ID:number ;

@Column()
Description:string;

@Column()
ammount:number;

@Column()
spentDate:Date;

@Column({default:10000})
monthlyLimit:number ;



}