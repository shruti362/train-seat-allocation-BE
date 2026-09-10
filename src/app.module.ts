import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RegistrationModule } from './registration/registration.module.js';

import { LoginModule } from './login/login.module.js';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'shruti',
      password: 'shruti@123',
      database: 'BillingDc',
      autoLoadEntities: true,
      synchronize: false,
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),

    RegistrationModule,

    LoginModule
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}