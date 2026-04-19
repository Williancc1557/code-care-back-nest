import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';

@Module({
    controllers: [AuthController],
    providers: [LocalAuthGuard,  LocalStrategy],
})
export class AuthModule {}
