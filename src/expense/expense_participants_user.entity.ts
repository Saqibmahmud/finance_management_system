import { Entity, PrimaryColumn } from "typeorm";

@Entity('expense_participants_user')
export class expense_participants_user{

    @PrimaryColumn()
    expenseId: number;
  
    @PrimaryColumn()
    userId: number;




}