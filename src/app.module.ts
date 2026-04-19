import { Module } from '@nestjs/common';
import { AuthModule } from './routes/auth/auth.module';
import { RepositoriesService } from './providers/repositories/repositories.service';
import { UsersService } from './providers/repositories/users/users.service';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [],
  providers: [RepositoriesService, UsersService],
})
export class AppModule {}
