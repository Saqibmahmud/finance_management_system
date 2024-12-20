import { Body, Controller, Get, Post, UseGuards, ValidationPipe,Request } from '@nestjs/common';
import { BudgetTrackingService } from './budget-tracking.service';
import { spendingDto } from 'src/custom-allert/spending.dto';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard('jwt'))
@Controller('budget-tracking')
export class BudgetTrackingController {
constructor(private readonly budgetTrackingService:BudgetTrackingService){}



    @Post('savings-investments')
    createSavings(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
        
        const userId=req.user.userId ;
        return this.budgetTrackingService.createNew_Saving(spendingdto,userId);    
    
    }
    
    @Post('personal-spents')
    createPersonalSpents(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.createNew_PersonalSpending(spendingdto,userId);    
    
    }
    
    @Post('essential-spents')
    createEssential(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.createNew_Essential(spendingdto,userId);    
    
    }
    
    @Post('debt-payments')
    
    createDebtPay(@Body(ValidationPipe)spendingdto:spendingDto,@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.createNew_Debt_pay(spendingdto,userId);    
    
    }

    @Post('addIncome')
   addIncome(@Body(ValidationPipe)spendingdto:spendingDto ,@Request() req){
    const userId=req.user.userId ;
        return this.budgetTrackingService.createNewIncome(spendingdto,userId);    
    
    }
   
    @Get('allTransactions')
    getAlltransactions(@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.getAlltransactions(userId) ;
    }
   
    @Get('totalValues')
    getTotalValues(@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.getTotalTransaction(userId) ;
    }

    @Get('monthlyTransactions')
    getMonthlytransactions(@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.getMonthlyTransaction(userId) ;
    }

@Get('totalMonthlyValues')
    getTotalMonthlyValues(@Request() req){
        const userId=req.user.userId ;
        return this.budgetTrackingService.getMonthlyTotal(userId) ;
    }










}












