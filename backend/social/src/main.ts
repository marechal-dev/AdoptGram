import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import env from '@Configs/env';
import corsOptions from '@Configs/cors';

import { AppModule } from './app.module';

const APP_HOST = '0.0.0.0';

async function bootstrap() {
  const isDevEnv = env.NODE_ENV === 'development';

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: isDevEnv ? true : false,
    }),
  );

  app.enableCors(corsOptions);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  if (isDevEnv) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('AdoptGram Authentication API')
      .setDescription('AdoptGram Authentication API Documentation.')
      .setContact(
        'Pietro Piva Vieira',
        'https://github.com/marechal-dev',
        'pietro.developer@gmail.com',
      )
      .setVersion('1.0')
      .addTag('common-users')
      .addTag('non-governamental-organizations')
      .build();
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api-docs', app, swaggerDocument);
  }

  await app.listen(env.PORT, APP_HOST);
}

bootstrap();
