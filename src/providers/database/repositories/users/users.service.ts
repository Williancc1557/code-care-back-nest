import { Inject, Injectable } from "@nestjs/common";
import { DatabaseEnum } from "src/enums/database.enum";
import type { User } from "src/schemas/user.entity";
import type { Repository } from "typeorm";

@Injectable()
export class UsersService {
	constructor(
		@Inject(DatabaseEnum.USER_REPOSITORY)
		private userRepository: Repository<User>,
	) {}

	async findByEmail(email: string): Promise<User | null> {
		return this.userRepository.findOneBy({
			email,
		});
	}

	async create(userToSave: Omit<User, "id">): Promise<User> {
		return this.userRepository.save(userToSave);
	}
}
