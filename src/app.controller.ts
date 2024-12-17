import { Controller, Get,Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
  

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
//localhost:3000/api/protected e gale messege return korbe and user er id return korbe 
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
   @UseGuards(AuthGuard('jwt'))

  @Get('protected')
  getProtectedRoute(@Request() req ){
    return{
      message:"access Granted",
      user:req.user 
    };
  }
}
