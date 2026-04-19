import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { databaseProviders } from '../../database.providers';

@Module({
    imports: [],
    exports: [UsersService],
    providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
