import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip out unexpected properties
      forbidNonWhitelisted: true, // Reject requests with unexpected properties
      transform: true, // Automatically transform plain objects to class instances
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
