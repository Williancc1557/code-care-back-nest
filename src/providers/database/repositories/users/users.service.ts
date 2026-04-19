import { Inject, Injectable } from '@nestjs/common';
import { DatabaseEnum } from 'src/enums/database.enum';
import { User } from 'src/schemas/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @Inject(DatabaseEnum.USER_REPOSITORY)
        private userRepository: Repository<User>
    ){}

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository.findOneBy({
            email,
        });

        return user
    }
}
