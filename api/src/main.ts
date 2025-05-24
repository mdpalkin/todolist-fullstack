import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder'
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Todolist API')
  .setDescription('The Todolist API description')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
