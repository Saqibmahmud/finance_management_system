import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('Debt')
export class Debt{
@PrimaryGeneratedColumn()
debtId:number ;

@Column()
debt_taker:string  ;

@Column()
debtAmmount:number;

@Column()
returnDate:Date ;

@Column({default:false})
getNotified:boolean ;


@Column({ nullable: true})
description:string ;
@Column({nullable:true})
userId:number ;


}