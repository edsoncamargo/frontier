import { FastifyInstance } from 'fastify';
import fastifyMultipart from '@fastify/multipart';

export function setFastifyMultipart(app: FastifyInstance) {
  app.register(fastifyMultipart);
}
