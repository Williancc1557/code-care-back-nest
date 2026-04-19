
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log("test")
    return true
  }
  fail(challenge: unknown, status?: unknown): void {
      console.log("test")
  }

  error(err: Error): void {
      console.log("test")
  }
}
