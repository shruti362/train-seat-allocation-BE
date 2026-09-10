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
      host: '192.168.1.207',
      port: 1433,
      username: 'sa',
      password: '123456',
      database: 'INTERN20260807',
      autoLoadEntities: true,
      synchronize: true,
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