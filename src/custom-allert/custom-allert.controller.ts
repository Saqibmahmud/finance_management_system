import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards, ValidationPipe,Request } from '@nestjs/common';
import { CustomAllertService } from './custom-allert.service';
import { spendingDto } from './spending.dto';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard('jwt'))
@Controller('custom-allert')
export class CustomAllertController {
constructor(private readonly custom_allert_service:CustomAllertService  ){}

@Post('savings-investments')
createSavings(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
    const userId=req.user.userId;
    return this.custom_allert_service.createNew_Saving(spendingdto,userId);    

}

@Post('personal-spents')
createPersonalSpents(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
    const userId=req.user.userId;
    return this.custom_allert_service.createNew_PersonalSpending(spendingdto,userId);    

}

@Post('essential-spents')
createEssential(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
    const userId=req.user.userId;
    return this.custom_allert_service.createNew_Essential(spendingdto,userId);    

}

@Post('debt-payments')
createDebtPay(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
    const userId=req.user.userId;
    return this.custom_allert_service.createNew_Debt_pay(spendingdto,userId);    

}

@Get('savings-invesment')
getSavingsAllert(@Request() req){
    const userId=req.user.userId;
    return this.custom_allert_service.allert_savings(userId);

}

@Get('essentials-costs')
getEssentialAllert(@Request() req){
    const userId=req.user.userId;
    return this.custom_allert_service.allert_essentials(userId);

}


// cattegories can only bellow
// 1. savings_investments
// 2.essentials_spents
// 3.personal_spents
// 4.debt_payments

@Patch('updateLimit/:category')
updateLimit(@Param('category')category:string,@Body('newLimit')newLimit:number,@Request() req){
    const userId=req.user.userId;
   return this.custom_allert_service.change_limit(newLimit,category,userId);


}


}
