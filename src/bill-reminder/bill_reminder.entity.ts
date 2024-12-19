
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bills_reminder')
export class bills_reminder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  billName: string;

  @Column()
  dueDate: Date;

  @Column()
  amount: number;

  @Column()
  notificationSent: boolean;

  @Column({ default: true })
  active: boolean;

  @Column({nullable:true})
  userId:number ;
}
