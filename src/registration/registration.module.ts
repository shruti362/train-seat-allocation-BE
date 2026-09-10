import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller.js';
import { RegistrationService } from './registration.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from '../entities/Registration.js';


@Module({
    imports: [
        TypeOrmModule.forFeature([Registration])
    ],
    controllers: [RegistrationController],
    providers: [RegistrationService]
})
export class RegistrationModule { }
