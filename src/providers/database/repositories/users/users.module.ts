import { Module } from '@nestjs/common';
import { DatabaseConnectionModule } from '../../database-connection.module';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
    imports: [DatabaseConnectionModule],
    exports: [UsersService],
    providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
