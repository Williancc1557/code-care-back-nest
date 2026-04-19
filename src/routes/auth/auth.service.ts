import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "src/providers/database/repositories/users/users.service";
import { User } from "src/schemas/user.entity";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async findUserByEmail(email: string): Promise<User | null> {
		const user = await this.usersService.findByEmail(email);

		return user;
	}

	async validateUserPassword(
		email: string,
		password: string,
	): Promise<User | null> {
		const user = await this.findUserByEmail(email);

		if (!user) {
			return null;
		}

		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return null;
		}

		return user;
	}

	async login(user: User): Promise<string> {
		const payload = { email: user.email, sub: user.id };
		const accessToken = this.jwtService.sign(payload);

		return accessToken;
	}

	async register(user: Omit<User, "id">): Promise<string> {
		const saltOrRounds = 10;
		const hashedPassword = await bcrypt.hash(user.password, saltOrRounds);

		const createdUser = await this.usersService.create({
			email: user.email,
			password: hashedPassword,
		});

		const payload = { email: createdUser.email, sub: createdUser.id };

		const accessToken = this.jwtService.sign(payload);

		return accessToken;
	}
}
