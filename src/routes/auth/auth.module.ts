import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from 'src/providers/database/repositories/users/users.service';
import { usersProviders } from 'src/providers/database/repositories/users/users.providers';
import { databaseProviders } from 'src/providers/database/database.providers';
import { DatabaseModule } from 'src/providers/database/database.module';

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
              secret: config.get<string>('JWT_SECRET'),
              signOptions: { expiresIn: '60s' },
            }),
          }),
          DatabaseModule
    ],
    controllers: [AuthController],
    providers: [
        LocalAuthGuard,
        LocalStrategy,
        AuthService
    ],
    })
export class AuthModule {}
