import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { DebtService } from './debt.service';
import { debtDto } from './debt_dto.dto';

@Controller('debt')
export class DebtController {
constructor(private readonly debtService:DebtService){}

@Post('addDebt')
async addDebt(@Body(ValidationPipe) debtdto:debtDto )
{
return this.debtService.addDebt(debtdto)  ;


}



@Get('allDebt')
getAlldebts(){
    return this.debtService.getAlldebts() ;
}


@Put(':id/update')//put full update kore and patch() partially upodate kore
  async updateDebt(
    @Param('id', ParseIntPipe) id: number,
    @Body() debtDto: debtDto,
  ) {
    return this.debtService.updateDebt( debtDto);
  }

  // Delete debt by ID
  @Delete(':id/delete')
  async deleteDebt(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.debtService.deleteDebt(id);
  }



}
