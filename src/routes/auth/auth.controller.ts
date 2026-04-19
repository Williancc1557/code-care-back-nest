import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('register')
    private async register(@Body(ValidationPipe) data: RegisterDto) {
        return data
    }
}
