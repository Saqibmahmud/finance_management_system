import { Controller, Get, Param } from '@nestjs/common';
import { AnalyseSpendingService } from './analyse-spending.service';

@Controller('analyse-spending')
export class AnalyseSpendingController {

constructor(private readonly analysespendingService:AnalyseSpendingService){}
// cattegories can only bellow
// 1. savings_investments
// 2.essentials_spents
// 3.personal_spents
// 4.debt_payments
@Get(':category')
analyse(@Param('category')category:string){
   return this.analysespendingService.analyse_spendings(category) ;


}





}
