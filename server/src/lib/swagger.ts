import { FastifyInstance } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

export function setSwagger(app: FastifyInstance) {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'SampleApi',
        description: 'Sample backend service',
        version: '1.0.0',
      },
      servers: [],
    },
    transform: jsonSchemaTransform,
  });

  app.register(fastifySwaggerUI, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecificationClone: true,
  });
}
