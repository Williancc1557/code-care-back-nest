import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	async validate(_username: string, _password: string): Promise<any> {
		console.log("test");
		return true;
	}
	fail(_challenge: unknown, _status?: unknown): void {
		console.log("test");
	}

	error(_err: Error): void {
		console.log("test");
	}
}
