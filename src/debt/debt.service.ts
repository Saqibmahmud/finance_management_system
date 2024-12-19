import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Debt } from './debt.entity';
import { Repository } from 'typeorm';
import { debtDto } from './debt_dto.dto';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class DebtService {
constructor(@InjectRepository(Debt) private readonly  debtRepo:Repository<Debt>    ){}


async addDebt(debt_dto:debtDto,userid:number){
    const{debt_taker,debtAmmount,returnDate,getNotified}=debt_dto ;
  const newDebt= this.debtRepo.create({debt_taker,debtAmmount,returnDate,getNotified,userId:userid}) ;
  await this.debtRepo.save(newDebt) ;
  return "Debt added Succesfully" ;
}

//check and nnotify
@Cron('0 0 * * *') //raat 12 tay  runn  korbe code  auto  from nestjs@schedule
async getNotified(user_id:number){

 let today= new  Date   ;

 const debts= await this.debtRepo.find({where:{userId:user_id,getNotified:false}}) ;

 for(const debt of debts ){
    if(debt.returnDate===today){
        debt.getNotified=true ;
        await this.debtRepo.save(debt);
        console.log(debt.debt_taker) ;
        return `today is the Return  date  of debt  Taker:${debt.debt_taker} with debt ammount:${debt.debtAmmount} ` ;
         
    }
 }

}

async updateDebt(debtdto:debtDto,userid:number)
{
    const{debtid,debt_taker,debtAmmount,returnDate,getNotified}=debtdto ;
    const debt = await this.debtRepo.findOne({ where:{userId:userid,debtId:debtid}   });

    if (!debt) {
      throw new HttpException('Debt not found',HttpStatus.BAD_REQUEST);
    }

    debt.debt_taker = debt_taker;
    debt.debtAmmount = debtAmmount;
    debt.returnDate = returnDate;
    debt.getNotified = getNotified;

    await this.debtRepo.save(debt);
    return 'Debt updated successfully';
  }






async deleteDebt(debtid:number,userid:number){
   
    const result = await this.debtRepo.delete({ userId: userid, debtId: debtid });

    if (result.affected === 0) {
      throw new HttpException('Debt not found',HttpStatus.BAD_REQUEST);
    }

    return 'Debt deleted successfully';
  }



async getAlldebts(userid:number){
return await this.debtRepo.find({where:{userId:userid}}) ;




}
}




