import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Debt_Payments } from 'src/categoriesOfSpending_Entities/Debt_Payments.entity';
import { Essentials } from 'src/categoriesOfSpending_Entities/Essentials.entity';
import { Personal_Spendings } from 'src/categoriesOfSpending_Entities/Personal_Spendings.entity';
import { Saving_Investments } from 'src/categoriesOfSpending_Entities/Savings_Investments.entity';
import { spendingDto } from 'src/custom-allert/spending.dto';
import { Between, Repository } from 'typeorm';
import { Transactions } from './Transaction.entity';

@Injectable()
export class BudgetTrackingService {
    constructor( @InjectRepository(Saving_Investments)private readonly savingsRepo:Repository<Saving_Investments>,
    @InjectRepository(Personal_Spendings) private readonly personalRepo:Repository<Personal_Spendings>,
    @InjectRepository(Essentials)private readonly essentialRepo:Repository<Essentials>,
    @InjectRepository(Debt_Payments)private readonly debt_paymentRepo:Repository<Debt_Payments>,@InjectRepository(Transactions)private readonly tranRepo:Repository<Transactions>){}



    async createNew_Saving(spendingdto:spendingDto,userid:number){
        const{Description,ammount,spentDate}= spendingdto;
       const new_exp=    this.savingsRepo.create({Description,ammount,spentDate});
        await   this.savingsRepo.save(new_exp);
       const description=Description ;
       const type="expense";
       const now= new Date() ;
       const transactionDate=now ;
        const new_tran=this.tranRepo.create({description,ammount,type,transactionDate}) ;
        this.tranRepo.save(new_tran) ;
         return "New Spending added to Saving and Investments" ;
    }
    
    async createNew_PersonalSpending(spendingdto:spendingDto,userid:number){
        const{Description,ammount,spentDate}= spendingdto;
       const new_exp= this.personalRepo.create({Description,ammount,spentDate});
       await   this.personalRepo.save(new_exp);

       const description=Description ;
       const type="expense";
       const now= new Date() ;
       const transactionDate=now ;
        const new_tran=this.tranRepo.create({description,ammount,type,transactionDate}) ;
        this.tranRepo.save(new_tran) ;
        return "New Spending added to Personal Costs" ;
    }
    
    async createNew_Essential(spendingdto:spendingDto,userid:number){
        const{Description,ammount,spentDate}= spendingdto;
       const new_exp= this.essentialRepo.create({Description,ammount,spentDate});
       await   this.essentialRepo.save(new_exp);

       const description=Description ;
       const type="expense";
       const now= new Date() ;
       const transactionDate=now ;
        const new_tran=this.tranRepo.create({description,ammount,type,transactionDate}) ;
        this.tranRepo.save(new_tran) ;
        
        return "New Spending added to Essential Costs" ;
    }
    
    
    async createNew_Debt_pay(spendingdto:spendingDto,userid:number){
        const{Description,ammount,spentDate}= spendingdto;
      const new_exp=  this.debt_paymentRepo.create({Description,ammount,spentDate});
      await   this.debt_paymentRepo.save(new_exp);

      const description=Description ;
       const type="expense";
       const now= new Date() ;
       const transactionDate=now ;
        const new_tran=this.tranRepo.create({description,ammount,type,transactionDate}) ;
        this.tranRepo.save(new_tran) ;
      
        return "New Spending added to pay Debts for later" ;
    
    }
 async createNewIncome(spendingdto:spendingDto,userId:number){
    const{Description,ammount,spentDate}= spendingdto;
    const description=Description ;
const type="income" ;
const now= new Date() ;
const transactionDate= spentDate ;

      const newTran= this.tranRepo.create({description,ammount,type,transactionDate,userId}) ;
      await this.tranRepo.save(newTran) ;
      return"New Income added succesfully" ; 
 }


 async getAlltransactions(userid:number){

return await this.tranRepo.find({where:{userId:userid}}) ;

 }
 async getTotalTransaction(userid:number){ //total income //total expoense //net income
    const incomes=await this.tranRepo.find({where:{type:"income",userId:userid}}) ;
    let total_income= 0;
    for(const i of incomes){
        total_income=total_income+Number(i.ammount) ;
        
    }
    const expenses=await this.tranRepo.find({where:{type:"expense",userId:userid}}) ;
    let total_expense= 0;
    for(const e of expenses){
        total_expense=total_expense+Number(e.ammount) ;
        
    }
    const net_income=total_income-total_expense ;
    return { total_income: `Total Income is: ${total_income}Tk`, 
    total_expense: `Total Expense is: ${total_expense}Tk`, 
    net_income: `Net Income is: ${net_income}Tk`,
};
 


    
}

async getMonthlyTransaction(userid:number){

const now=new Date();
const startofmonth=new Date(now.getFullYear(),now.getMonth(),1);
const endofmonth= new Date(now.getFullYear(),now.getMonth()+1,0)
return await this.tranRepo.find({
    where: {userId:userid,
        transactionDate: Between(startofmonth, endofmonth)
    }});



}

async getMonthlyTotal(userid:number){
    const now=new Date();
const startofmonth=new Date(now.getFullYear(),now.getMonth(),1);
const endofmonth= new Date(now.getFullYear(),now.getMonth()+1,0)
    const incomes=await this.tranRepo.find({where:{userId:userid,type:"income", transactionDate: Between(startofmonth, endofmonth)}}) ;
    let total_income= 0;
    for(const i of incomes){
        total_income=total_income+Number(i.ammount) ;
        
    }
    const expenses=await this.tranRepo.find({where:{userId:userid,type:"expense",transactionDate: Between(startofmonth, endofmonth)}}) ;
    let total_expense= 0;
    for(const e of expenses){
        total_expense=total_expense+Number(e.ammount) ;
        
    }
    const net_income=total_income-total_expense ;
    return { total_income: `Total Income is: ${total_income}Tk`, 
    total_expense: `Total Expense is: ${total_expense}Tk`, 
    net_income: `Net Income is: ${net_income}Tk`,
};

}















}
