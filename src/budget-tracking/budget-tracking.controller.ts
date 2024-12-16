import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { BudgetTrackingService } from './budget-tracking.service';
import { spendingDto } from 'src/custom-allert/spending.dto';

@Controller('budget-tracking')
export class BudgetTrackingController {
constructor(private readonly budgetTrackingService:BudgetTrackingService){}



    @Post('savings-investments')
    createSavings(@Body(ValidationPipe)spendingdto:spendingDto){
        return this.budgetTrackingService.createNew_Saving(spendingdto);    
    
    }
    
    @Post('personal-spents')
    createPersonalSpents(@Body(ValidationPipe)spendingdto:spendingDto){
        return this.budgetTrackingService.createNew_PersonalS(spendingdto);    
    
    }
    
    @Post('essential-spents')
    createEssential(@Body(ValidationPipe)spendingdto:spendingDto){
        return this.budgetTrackingService.createNew_Essential(spendingdto);    
    
    }
    
    @Post('debt-payments')
    createDebtPay(@Body(ValidationPipe)spendingdto:spendingDto){
        return this.budgetTrackingService.createNew_Debt_pay(spendingdto);    
    
    }

    @Post('addIncome')
   addIncome(@Body(ValidationPipe)spendingdto:spendingDto ){
        return this.budgetTrackingService.createNewIncome(spendingdto);    
    
    }
    @Get('allTransactions')
    getAlltransactions(){
        return this.budgetTrackingService.getAlltransactions() ;
    }

    @Get('totalValues')
    getTotalValues(){
        return this.budgetTrackingService.getTotalTransaction() ;
    }

    @Get('monthlyTransactions')
    getMonthlytransactions(){
        return this.budgetTrackingService.getMonthlyTransaction() ;
    }

@Get('totalMonthlyValues')
    getTotalMonthlyValues(){
        return this.budgetTrackingService.getMonthlyTotal() ;
    }










}












