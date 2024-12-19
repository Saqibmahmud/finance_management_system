import { HttpException, HttpStatus, Injectable, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './Currency.entity';
import { Code, Repository } from 'typeorm';
import axios from 'axios';
import { currencyDto } from '../currency.dto';
import { convert_currencyDto } from '../currency_convert_dto.dto';

@Injectable()
export class CurrencyService {



constructor(@InjectRepository(Currency) private currencyrepository:Repository<Currency>){}

//update exchange rate constantly 
async Update_exchange_rates( /*currency_dto:currencyDto*/){
    const apiUrl='https://api.exchangerate-api.com/v4/latest/USD';
try{
    const response=  axios.get(apiUrl) ; //extraxt kore data from api
   const rates=(await response).data.rates ;
   const now= new Date();
//  let {code}=currency_dto;
//  let {rate}=currency_dto;
//  const{lastUpdated_date}=currency_dto;

   for( const [code,rate] of Object.entries(rates)){
    let currency=await this.currencyrepository.findOne({where:{code}}) ;
    if(!currency){
      currency= this.currencyrepository.create({code,rate:+rate ,lastUpdated_date:now});
    }
    else{
      currency.rate= +rate ; //to resolve the issue that rate is treated as a number
      currency.lastUpdated_date=now ;
        
    }
    await this.currencyrepository.save(currency) ;
    console.log(currency);

   }

    }
    catch(error){
      throw new HttpException("Failed to fetch data",HttpStatus.BAD_REQUEST) ;
    }
}


//currency_convert er function
async convert_currency(currency_convertdto:convert_currencyDto){
this.Update_exchange_rates() ;
const{from} =currency_convertdto;
const{to}=currency_convertdto;
const{ammount}=currency_convertdto ;

const fromCurrency=await this.currencyrepository.findOne({where:{code:from}}) ;
const toCurrency =await this.currencyrepository.findOne({where:{code:to}});

const convertedAmmount=(ammount/fromCurrency.rate)*toCurrency.rate ;
console.log(convertedAmmount) ;
return convertedAmmount ;

}


async show_allrates(){
 await this.currencyrepository.find();

}





}




















