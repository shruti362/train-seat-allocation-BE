import { Controller,Post,Body } from '@nestjs/common';
import { RegistrationService } from './registration.service.js';


@Controller('registration')
export class RegistrationController {


      constructor(
    private readonly usersService: RegistrationService
  ) {}


  @Post('register')
  async register(@Body() userData: any) {

    return await this.usersService.register(userData);

  }
}
