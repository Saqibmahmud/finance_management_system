import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class user{
@PrimaryGeneratedColumn()
id:number;

@Column({unique:true})
username:string ;

@Column()
password:string;

@Column()
full_name:string;

@Column({unique:true})
email:string;

@Column({unique:true})
phoneNumber:string;

@Column({ type: 'decimal', nullable: true }) 
monthlyIncome: number; 
@Column({ type: 'decimal', nullable: true }) 
monthlyExpenses: number;

; @Column({ nullable: true })
 financialGoals: string;
 @Column({ nullable: true })
  notificationPreferences: string;
  
  @Column() 
  privacyPolicyAccepted: boolean;


}