import { Module } from '@nestjs/common';
import { UsersModule } from './repositories/users/users.module';

@Module({
  imports: [UsersModule],
  exports: [UsersModule],
})
export class DatabaseModule {}
