import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function setupSwagger(app: NestFastifyApplication) {
  const config = new DocumentBuilder()
    .setTitle('AdoptGram Main API')
    .setDescription('AdoptGram Main API Documentation.')
    .setContact(
      'Pietro Piva Vieira',
      'https://github.com/marechal-dev',
      'pietro.developer@gmail.com',
    )
    .setVersion('1.0')
    .addTag('common-users')
    .addTag('non-governamental-organizations')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);
}

export function setupDevelopmentConfigs(app: NestFastifyApplication) {
  setupSwagger(app);
}
