import { Body, Controller, Param, Post, ValidationPipe } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { convert_currencyDto } from '../currency_convert_dto.dto';

@Controller('currency')
export class CurrencyController {

constructor(private readonly currencyService:CurrencyService){}

@Post('update-rates')
async update_rates(){
    await this.currencyService.Update_exchange_rates();
    return "rates updated succesfully" ;
}


@Post('convert-currency')
async convertCurrency( @Body(ValidationPipe) convert_currencyydto:convert_currencyDto){
  const  convertAmmount= await this.currencyService.convert_currency(convert_currencyydto);
   return convertAmmount;
}


@Post('all-currencies')
allcurrencies(){
   const res= this.currencyService.show_allrates() ;
   return res ;
}





}
