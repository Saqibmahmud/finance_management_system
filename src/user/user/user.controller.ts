import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { user_Dto } from '../user_register_dto.dto';
import { user_login_Dto } from './user_login_dto.dto';

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






}



