import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Records example')
    .setDescription('Records API')
    .setVersion('1.0')
    .addTag('records')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(env.PORT || 8100, () => {
    console.log(
      `
 🚀 Server ready at: http://localhost:8100
⭐️ See sample queries: http://localhost:8100/api#/`.trimEnd(),
    );
  });
}
bootstrap();
