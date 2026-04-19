import { IsEmail, IsStrongPassword } from "class-validator";

export class RegisterDto {
	@IsEmail()
	public email: string;

	@IsStrongPassword()
	public password: string;
}
