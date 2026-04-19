import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    providers: [LocalAuthGuard,  LocalStrategy, AuthService],
})
export class AuthModule {}
