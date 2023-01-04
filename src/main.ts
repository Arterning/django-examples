import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //make all unwanted propes striped out
    forbidNonWhitelisted:true, 
    transform: true
  }))
  await app.listen(3000);
}
bootstrap();
