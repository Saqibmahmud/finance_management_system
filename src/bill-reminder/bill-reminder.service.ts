import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { bills_reminder } from './bill_reminder.entity';
import { Between, Repository } from 'typeorm';
import { BillDto } from './bill_reminder.dto';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class BillReminderService {

    constructor(
        @InjectRepository(bills_reminder)
        private billRepository: Repository<bills_reminder>,
      ) {}


      async addBill(billDto: BillDto) {
        const{billName,amount}=billDto ;
        const bill = this.billRepository.create({
          billName,amount,
          dueDate: new Date(billDto.dueDate),
          notificationSent: false,
        });
        await this.billRepository.save(bill);
        return 'Bill added successfully';
      }
      async getAllBills() {
        return this.billRepository.find({ where: { active: true } });
      }

      async deleteBill(id: number): Promise<string> {
        const result = await this.billRepository.update(id, { active: false });
        if (result.affected === 0) {
          throw new HttpException('Bill not found', HttpStatus.NOT_FOUND);
        }
        return 'Bill deleted successfully';
      }
      @Cron('0 0 ') // Run daily at 12:00 AM
      async checkAndNotify() {
        const today = new Date();
        const upcomingBills = await this.billRepository.find({
          where: {
            notificationSent: false,
            dueDate: Between(
              new Date(today.getFullYear(), today.getMonth(), today.getDate() ),
              new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
            ),
          },
        });
    
        for (const bill of upcomingBills) {
            bill.notificationSent = true;
            await this.billRepository.save(bill);
          
          return`Reminder: Bill "${bill.billName}" is due on ${bill.dueDate}. Amount: $${bill.amount}`;
    
          
        }
      }









    }
