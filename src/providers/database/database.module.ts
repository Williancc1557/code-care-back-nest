import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UsersModule } from './repositories/users/users.module';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders, UsersModule],
    imports: [UsersModule],
})
export class DatabaseModule {}
