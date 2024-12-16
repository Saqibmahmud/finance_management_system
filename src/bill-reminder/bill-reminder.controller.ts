import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BillReminderService } from './bill-reminder.service';
import { BillDto } from './bill_reminder.dto';

@Controller('bill-reminder')
export class BillReminderController {

    constructor(private readonly billService: BillReminderService) {}


    @Post('add')
    async addBill(@Body() billDto: BillDto){
      return this.billService.addBill(billDto);
    }
  
    @Get('allbills')
    async getAllBills() {
      return this.billService.getAllBills();
    }
  
    @Delete(':id')
    async deleteBill(@Param('id', ParseIntPipe) id: number) {
      return this.billService.deleteBill(id);
    }
  }








