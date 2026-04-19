import { Module } from '@nestjs/common';
import { AuthModule } from './routes/auth/auth.module';
import { DatabaseModule } from './providers/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
