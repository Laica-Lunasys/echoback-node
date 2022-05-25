import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logtest } from './logtest';

async function bootstrap() {
  logtest();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
