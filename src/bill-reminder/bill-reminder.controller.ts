import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post ,Request} from '@nestjs/common';
import { BillReminderService } from './bill-reminder.service';
import { BillDto } from './bill_reminder.dto';

@Controller('bill-reminder')
export class BillReminderController {

    constructor(private readonly billService: BillReminderService) {}


    @Post('add')
    async addBill(@Body() billDto: BillDto,@Request() req){
      const userId=req.user.userId ;
      return this.billService.addBill(billDto,userId);
    }
  
    @Get('allbills')
    async getAllBills(@Request() req) {
      const userId=req.user.userId ;
      return this.billService.getAllBills(userId);
    }
  
    @Delete(':id')
    async deleteBill(@Param('id', ParseIntPipe) id: number,@Request() req) {
      const userId=req.user.userId ;
      return this.billService.deleteBill(id);
    }
  }








