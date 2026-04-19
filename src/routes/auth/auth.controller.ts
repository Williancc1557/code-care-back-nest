import {
	Body,
	Controller,
	Post,
	UnauthorizedException,
	ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { RegisterDto } from "./dtos/register.dto";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	// @UseGuards(LocalAuthGuard)
	@Post("login")
	async login(@Body(ValidationPipe) data: RegisterDto) {
		const user = await this.authService.validateUserPassword(
			data.email,
			data.password,
		);

		if (!user) {
			throw new UnauthorizedException("Invalid email or password");
		}

		const accessToken = await this.authService.login(user);

		return {
			accessToken,
		};
	}

	@Post("register")
	async register(@Body(ValidationPipe) data: RegisterDto) {
		const user = await this.authService.findUserByEmail(data.email);

		if (user) {
			throw new UnauthorizedException("User already exists!");
		}

		const accessToken = await this.authService.register(data);

		return {
			accessToken,
		};
	}
}
