import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user/user.entity';
import { In, Repository, Transaction } from 'typeorm';
import { Expense } from './expense.entity';
import { expenseDto } from './expense_dto.dto';
import { expense_participants_user } from './expense_participants_user.entity';
import { Transactions } from 'src/budget-tracking/Transaction.entity';

@Injectable()
export class ExpenseSplitService {


constructor(@InjectRepository(User)private  readonly userRepo:Repository<User> ,
@InjectRepository(Expense)private readonly expenseRepo:Repository<Expense>,@InjectRepository(expense_participants_user) private readonly expesne_userRepo:Repository<expense_participants_user>,
@InjectRepository(Transactions)private readonly transacRepo:Repository<Transactions>) {}

async addBill(expense_dto:expenseDto){ 
const { description, totalAmmount, shares, participants } = expense_dto;
let now=new Date();
const createdDate= now ;
const users=await this.userRepo.find({where:{id:In(participants)}}) ;
if ( users.length===0){
    throw new HttpException("No user found with this id",HttpStatus.BAD_REQUEST) ;
}
const newBill= this.expenseRepo.create({description,totalAmmount,createdDate,shares,participants:users});

await this.expenseRepo.save(newBill) ;
const type="expense";
const transactionDate= now ;
let ammount=totalAmmount;
const newtransac= this.transacRepo.create({description,ammount,type,transactionDate});
this.transacRepo.save(newtransac) ;
}


async  getUserShare(userID:number){
   
    const results = await this.expesne_userRepo.find({where:{userId:userID}});

    if(!results){
        throw new HttpException("No Split Bills Found",HttpStatus.BAD_REQUEST) ;
    }
    else{
  for(const r of results){
for(let v of Object.values(r)){
//let id=k;
let  exp=[]  ;
 exp.push(await this.expenseRepo.findOne({where:v}));
return exp;

}




  }
/*  let  w;
  let arr=[];

while(w in Object.values(results)){

}*/


    }
    }
}



//         where: { id: userID },
//         relations: ['expenses'],
//       });
//   if(!user){
//     throw new HttpException("No user found",HttpStatus.BAD_REQUEST) ;}
//   else{
//    return user ;
//   }










