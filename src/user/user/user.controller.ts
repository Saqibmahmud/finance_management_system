import { Body, Controller, Delete, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { user_Dto } from './user_register_dto.dto';
import { user_login_Dto } from './user_login_dto.dto';
import { pass_update_Dto } from './pass_update_dto.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
constructor(private readonly userService: UserService) {}

@Post('register')
register(@Body(ValidationPipe) userdto:user_Dto){
    return this.userService.createUser(userdto);

}
@Post('login')
async login(@Body(ValidationPipe)user_login_dto:user_login_Dto )
{
return await this.userService.login(user_login_dto);

}

@UseGuards(AuthGuard('jwt'))
@Patch('updatePass')
Updatepass(@Body(ValidationPipe)pass_update_dto:pass_update_Dto){
    return  this.userService.update_password(pass_update_dto);

}

@Delete('/delete/:id') 
async deleteUser(@Param('id', ParseIntPipe) id: number)
 { try { return await this.userService.deleteUser(id); }
  catch (error) 
  { throw new HttpException(error.message, HttpStatus.NOT_FOUND); 
    
  } }

}



