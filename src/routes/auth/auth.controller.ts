import {
	Body,
	Controller,
	Post,
	UnauthorizedException,
	UseGuards,
	ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { RegisterDto } from "./dtos/register.dto";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post("register")
	async register(@Body(ValidationPipe) data: RegisterDto) {
		const user = await this.authService.validateUser(data.email, data.password);

		if (!user) {
			throw new UnauthorizedException("Invalid email or password");
		}

		const token = await this.authService.login(user);
		return {
			token,
		};
	}
}
