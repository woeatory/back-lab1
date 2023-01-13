import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Records example')
    .setDescription('Records API')
    .setVersion('1.0')
    .addTag('records')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(env.PORT || 3000, () => {
    console.log(
      `
🚀 Server ready at: http://localhost:3000
⭐️ See sample queries: http://localhost:3000/api#/`.trimEnd(),
    );
  });
}
bootstrap();
