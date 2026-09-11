import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Registration } from '../entities/Registration.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegistrationService {

      constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>
  ) {}


  async register(userData: any) {

    const result = await this.registrationRepository.query(
      `
      INSERT INTO MSTUSER
      (
        USERNAME,
        FULL_NAME,
        EMAIL,
        MOBILE,
        PASSWORD,
        ROLE,
        DATE_OF_BIRTH
      )
      VALUES
      (
        @0,
        @1,
        @2,
        @3,
        @4,
        'ADMIN',
        @5
        
      )
      `,
      [
        userData.USERNAME,
        userData.FULL_NAME,
        userData.EMAIL,
        userData.MOBILE,
        userData.PASSWORD,
        userData.DATE_OF_BIRTH
      ]
    );

    return {
      message: 'Admin registered successfully'
    };

  }

}
