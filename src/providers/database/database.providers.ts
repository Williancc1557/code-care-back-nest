import { join } from "node:path";
import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

/** Resolved from dist/providers/database → dist/schemas (Nest always runs compiled output). */
const entitiesGlob = `${join(__dirname, "..", "..", "schemas")}/**/*.entity.{ts,js}`;

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
				entities: [entitiesGlob],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];
