import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { ExpenseSplitService } from './expense.service';
import { expenseDto } from './expense_dto.dto';

@Controller('expense')
export class ExpenseController {
constructor(private  readonly expenseService:ExpenseSplitService){}




@Post('addbill')
addbill(@Body(ValidationPipe)expese_dto:expenseDto){
    this.expenseService.addBill(expese_dto);
    return"Bill Added succesfully" ;


}

@Get(':ID/shares')
getsplit_ammount(@Param('ID') userID:number ){

return this.expenseService.getUserShare(userID);


}




}
