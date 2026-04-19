import { Provider } from "@nestjs/common";
import { DatabaseEnum } from "src/enums/database.enum";
import { User } from "src/schemas/user.entity";
import type { DataSource } from "typeorm";

export const usersProviders: Provider[] = [
	{
		provide: DatabaseEnum.USER_REPOSITORY,
		useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
		inject: [DatabaseEnum.DATA_SOUCE],
	},
];
