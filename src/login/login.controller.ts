import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service.js';

@Controller('login')
export class LoginController {

    constructor(
        private readonly usersService: LoginService
    ) { }

      @Post('register')
      async register(@Body() userData: any) {
    
        return await this.usersService.login(userData);
    
      }
}
