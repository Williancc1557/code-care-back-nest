import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProviders: Provider[] = [
	{
		provide: "DATA_SOURCE",
		inject: [ConfigService],
		useFactory: async (config: ConfigService) => {
			const dataSource = new DataSource({
				type: "postgres",
				url: config.get<string>(
					"POSTGRES_URL",
					"postgresql://postgres:postgres@localhost:5432/auth_nest",
				),
				entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];
