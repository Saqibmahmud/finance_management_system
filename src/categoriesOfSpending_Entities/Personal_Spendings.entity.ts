import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Personal_Spendings')
export class Personal_Spendings{
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