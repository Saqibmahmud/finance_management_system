import { Body, Controller, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CustomAllertService } from './custom-allert.service';
import { spendingDto } from './spending.dto';

@Controller('custom-allert')
export class CustomAllertController {
constructor(private readonly custom_allert_service:CustomAllertService  ){}

@Post('savings-investments')
createSavings(@Body(ValidationPipe)spendingdto:spendingDto){
    return this.custom_allert_service.createNew_Saving(spendingdto);    

}

@Post('personal-spents')
createPersonalSpents(@Body(ValidationPipe)spendingdto:spendingDto){
    return this.custom_allert_service.createNew_PersonalS(spendingdto);    

}

@Post('essential-spents')
createEssential(@Body(ValidationPipe)spendingdto:spendingDto){
    return this.custom_allert_service.createNew_Essential(spendingdto);    

}

@Post('debt-payments')
createDebtPay(@Body(ValidationPipe)spendingdto:spendingDto){
    return this.custom_allert_service.createNew_Debt_pay(spendingdto);    

}

@Get('savings-invesment')
getSavingsAllert(){
    return this.custom_allert_service.allert_savings();

}

@Get('essentials-costs')
getEssentialAllert(){
    return this.custom_allert_service.allert_essentials();

}


// cattegories can only bellow
// 1. savings_investments
// 2.essentials_spents
// 3.personal_spents
// 4.debt_payments

@Patch('updateLimit/:category')
updateLimit(@Param('category')category:string,@Body('newLimit')newLimit:number){
   return this.custom_allert_service.change_limit(newLimit,category);


}


}
