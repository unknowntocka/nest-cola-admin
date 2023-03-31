import { NestFactory } from '@nestjs/core';
import { generateDocument } from './app.doc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 接入文档
  generateDocument(app);

  await app.listen(3000);
}
bootstrap();
