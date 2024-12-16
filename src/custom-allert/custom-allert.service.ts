import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Saving_Investments } from '../categoriesOfSpending_Entities/Savings_Investments.entity';
import { Personal_Spendings } from '../categoriesOfSpending_Entities/Personal_Spendings.entity';
import { Essentials } from '../categoriesOfSpending_Entities/Essentials.entity';
import { Debt_Payments } from '../categoriesOfSpending_Entities/Debt_Payments.entity';
import { spendingDto } from './spending.dto';
import { Transactions } from 'src/budget-tracking/Transaction.entity';

@Injectable()
export class CustomAllertService {
constructor(
    @InjectRepository(Saving_Investments)private readonly savingsRepo:Repository<Saving_Investments>,
@InjectRepository(Personal_Spendings) private readonly personalRepo:Repository<Personal_Spendings>,
@InjectRepository(Essentials)private readonly essentialRepo:Repository<Essentials>,
@InjectRepository(Debt_Payments)private readonly debt_paymentRepo:Repository<Debt_Payments>,@InjectRepository(Transactions)private readonly tranRepo:Repository<Transactions> ){}

async createNew_Saving(spendingdto:spendingDto){
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

async createNew_PersonalS(spendingdto:spendingDto){
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

async createNew_Essential(spendingdto:spendingDto){
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


async createNew_Debt_pay(spendingdto:spendingDto){
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

async allert_savings(){
   const   today= new Date();
   const startOfMonth=new Date(today.getFullYear(),today.getMonth(),1) ;
   const endOfMonth= new Date(today.getFullYear(),today.getMonth()+1,0) ;

   const expenses= await this.savingsRepo.find({where:{spentDate:Between(startOfMonth,endOfMonth)}}) ;
   let totalspending=0 ;
   for(const exp of expenses){
         totalspending=totalspending+exp.ammount ;}
if(totalspending >= expenses[0].monthlyLimit){
    return"Your Limit of Savings and Investments is over the limit" ;
}
else{
    return "You  are bellow the limit";
}

   }
   


   async allert_essentials(){
    const   today= new Date();
    const startOfMonth=new Date(today.getFullYear(),today.getMonth(),1) ;
    const endOfMonth= new Date(today.getFullYear(),today.getMonth()+1,0) ;
 
    const expenses= await this.essentialRepo.find({where:{spentDate:Between(startOfMonth,endOfMonth)}}) ;
    let totalspending=0 ;
    for(const exp of expenses){
          totalspending=totalspending+exp.ammount ;}
 if(totalspending >= expenses[0].monthlyLimit){
     return"Your Limit of Essential spendings is over the limit" ;
 }
 else{
     return "You  are bellow the limit";
 }
 
    }
    


async change_limit(newLimit:number,category:string){

if(category==="savings_investments"){

const results=await this.savingsRepo.find();
for(const res of results){

res.monthlyLimit=newLimit ;
await this.savingsRepo.save(res);

}

return `MonthlyLimit of ${category} updated to ${newLimit}Tk` ;
}
else if(category==="essentials_spents"){

    const results=await this.essentialRepo.find();
    for(const res of results){
    
    res.monthlyLimit=newLimit ;
    await this.essentialRepo.save(res);
    
    }
    return `MonthlyLimit of ${category} updated to ${newLimit}Tk` ;
    }

else if(category==="personal_spents"){

        const results=await this.personalRepo.find();
        for(const res of results){
        
        res.monthlyLimit=newLimit ;
        await this.personalRepo.save(res);
        
        }
        return `MonthlyLimit of ${category} updated to ${newLimit}Tk` ;
        }
else if(category==="debt_payments"){

            const results=await this.debt_paymentRepo.find();
            for(const res of results){
            
            res.monthlyLimit=newLimit ;
            await this.debt_paymentRepo.save(res);
            
            }
            return `MonthlyLimit of ${category} updated to ${newLimit}TK` ;
            }
            else{
                throw new HttpException("category not found",HttpStatus.BAD_REQUEST) ;
            }




}












}




















