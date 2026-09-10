import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Registration } from '../entities/Registration.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(Registration)
        private readonly registrationRepository: Repository<Registration>,
        private readonly jwtService: JwtService
    ) { }

    async login(userdata: any) {
        const result = await this.registrationRepository.query(
            `select * from mstuser where USERNAME=@0 and PASSWORD=@1`,
            [userdata.USERNAME, userdata.PASSWORD]
        )

        if (result.length === 0) {
            throw new UnauthorizedException("Invalid username or password");
        }

        const user = result[0];

        const token = this.jwtService.sign({

            USER_ID: user.USER_ID,
            USERNAME: user.USERNAME,
            password: user.password,

        });

        return {

            message: 'Login successful',
            token: token,
            USERNAME: user.USERNAME,
            password: user.password,



        };


    }
}
