import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe,Request } from '@nestjs/common';
import { DebtService } from './debt.service';
import { debtDto } from './debt_dto.dto';
import { AuthGuard } from '@nestjs/passport';
@UseGuards(AuthGuard('jwt'))
@Controller('debt')
export class DebtController {
constructor(private readonly debtService:DebtService){}

@Post('addDebt')
async addDebt(@Body(ValidationPipe) debtdto:debtDto , @Request() req)
{
  const userId=req.user.userId ;
return this.debtService.addDebt(debtdto,userId);  


}



@Get('allDebt')
getAlldebts( @Request() req){
  const userId=req.user.userId ;
    return this.debtService.getAlldebts(userId) ;
}


@Put(':id/update')//put full update kore and patch() partially upodate kore
  async updateDebt(
    @Param('id', ParseIntPipe) id: number,
    @Body() debtDto: debtDto,@Request() req
  ) {
    const userId=req.user.userId ;
    return this.debtService.updateDebt( debtDto,userId);
  }

  // Delete debt by ID
  @Delete(':id/delete')
  async deleteDebt(@Param('id', ParseIntPipe) id: number,@Request() req) {
    const userId=req.user.userId ;
    return this.debtService.deleteDebt(id,userId);
  }



}
