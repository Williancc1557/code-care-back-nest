import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "src/providers/database/repositories/users/users.service";
import type { User } from "src/schemas/user.entity";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async validateUser(email: string, password: string): Promise<User | null> {
		const user = await this.usersService.findByEmail(email);

		if (!user) {
			return null;
		}

		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return null;
		}

		return user;
	}

	async login(user: User) {
		const payload = { email: user.email, sub: user.id };

		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
