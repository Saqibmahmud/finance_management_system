import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendOtp(email:string, otp: string) {
    await this.mailerService.sendMail({
        to:email,
        
        subject:'OTP for password reset',
        text:`Your OTP for password reset is ${otp}`
    });
  }
}
