import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const defaultOrigins = [
	"http://localhost:3000",
	"http://localhost:3001",
	"http://localhost:5173",
	"http://localhost:30001",
];

function corsOrigins(): string[] | boolean {
	const raw = process.env.FRONTEND_ORIGIN?.trim();
	if (raw === "*") {
		return true;
	}

	if (raw) {
		return raw.split(",").map((o) => o.trim()).filter(Boolean);
	}
	
	return defaultOrigins;
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: corsOrigins(),
		credentials: true,
		methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization", "Accept"],
	});
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
