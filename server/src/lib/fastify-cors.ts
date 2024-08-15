import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export function setFastifyCors(app: FastifyInstance) {
  app.register(cors, {
    origin: '*',
  });
}
