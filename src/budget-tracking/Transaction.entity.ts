import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Transactions')
export class Transactions{
@PrimaryGeneratedColumn()
transactionId:number ;

@Column()
description:string ;
@Column('decimal')
ammount:number;

@Column()
type:string ; //income/expense

@Column()
transactionDate:Date;

@Column({nullable:true})
userId:number ;

}