import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { Debt_Payments } from 'src/categoriesOfSpending_Entities/Debt_Payments.entity';
import { Essentials } from 'src/categoriesOfSpending_Entities/Essentials.entity';
import { Personal_Spendings } from 'src/categoriesOfSpending_Entities/Personal_Spendings.entity';
import { Saving_Investments } from 'src/categoriesOfSpending_Entities/Savings_Investments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnalyseSpendingService {
constructor( @InjectRepository(Saving_Investments)private readonly savingsRepo:Repository<Saving_Investments>,
    @InjectRepository(Personal_Spendings) private readonly personalRepo:Repository<Personal_Spendings>,
    @InjectRepository(Essentials)private readonly essentialRepo:Repository<Essentials>,
@InjectRepository(Debt_Payments)private readonly debt_paymentRepo:Repository<Debt_Payments>){}

// cattegories can only bellow
// 1. savings_investments
// 2.essentials_spents
// 3.personal_spents
// 4.debt_payments
async analyse_spendings(category:string,userid:number){
if(category==="savings_investments"){
    const results= await this.savingsRepo.find({where:{userId:userid}}) ;
   let total_sp=0 ;
    for(const res of results){
total_sp=total_sp+Number(res.ammount) ;

}


return{
    results,
    total_sp:`Total Spending in Category, ${category} = ${total_sp}Tk` 
}
}
else if(category==="essentials_spents"){
    const results= await this.essentialRepo.find({where:{userId:userid}}) ;
   let total_sp=0 ;
    for(const res of results){
total_sp=total_sp+Number(res.ammount) ;

    }
return{
    results,
    total_sp:`Total Spending in Category, ${category} = ${total_sp}Tk` 
}


}


else if(category==="personal_spents"){
    const results= await this.personalRepo.find({where:{userId:userid}}) ;
   let total_sp=0 ;
    for(const res of results){
total_sp=total_sp+Number(res.ammount) ;

    }
return{
    results,
    total_sp:`Total Spending in Category, ${category} = ${total_sp}Tk` 
}


}
else if(category==="debt_payments"){
    const results= await this.debt_paymentRepo.find({where:{userId:userid}}) ;
   let total_sp=0 ;
    for(const res of results){
total_sp=total_sp+Number(res.ammount) ;

    }
return{
    results,
    total_sp:`Total Spending in Category, ${category} = ${total_sp}Tk` 
}


}
else{
throw new HttpException("Category not found",HttpStatus.BAD_REQUEST) ;
}











}

}
