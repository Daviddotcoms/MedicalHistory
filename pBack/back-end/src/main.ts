import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PATCH,POST,DELETE',
  })
  const documentOptions = new DocumentBuilder()
  .setTitle('Medical History API')
  .setDescription('Manage patients and medical histories data')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
