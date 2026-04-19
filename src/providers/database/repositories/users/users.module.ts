import { Module } from "@nestjs/common";
import { DatabaseConnectionModule } from "../../database-connection.module";
import { usersProviders } from "./users.providers";
import { UsersService } from "./users.service";

@Module({
	imports: [DatabaseConnectionModule],
	exports: [UsersService],
	providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
