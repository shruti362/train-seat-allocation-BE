import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { Registration } from '../entities/Registration.js';
import { LoginController } from './login.controller.js';
import { LoginService } from './login.service.js';

@Module({
    imports: [
        TypeOrmModule.forFeature([Registration]),

        JwtModule.register({
            secret: 'mySecretKey',
            signOptions: {
                expiresIn: '1h',
            },
        }),
    ],

    controllers: [
        LoginController,
    ],

    providers: [
        LoginService,
    ],
})
export class LoginModule {}