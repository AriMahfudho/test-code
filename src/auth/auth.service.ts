// auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(user: User, password: string): Promise<boolean> {
    return await bcrypt.compare(password, user.password);
  }

  async login(user: User): Promise<string> {
    const payload = { username: user.username , sub: user.email};
    return this.jwtService.sign(payload);
  }
}
