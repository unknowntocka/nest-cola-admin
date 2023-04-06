import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { generateDocument } from './app.doc';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 使用全局校验
  app.useGlobalPipes(new ValidationPipe());

  // 标准异常处理
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 接入文档
  generateDocument(app);

  await app.listen(3000);
}
bootstrap();
