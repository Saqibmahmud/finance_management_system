import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Debt_Payments')
export class Debt_Payments{
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
@Column({nullable:true})
userId:number ;



}