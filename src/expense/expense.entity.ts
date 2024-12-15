import { User } from "src/user/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Expense')
export class Expense{
@PrimaryGeneratedColumn()
id:number ;

@Column()
description:string ;


@Column()
totalAmmount: number ;

@Column()
createdDate:Date ;

@ManyToMany(()=>User,(user)=>{user.expenses})
@JoinTable()
participants:User[];

@Column('simple-json')
shares:{[user_name:string]:number} ;



}
