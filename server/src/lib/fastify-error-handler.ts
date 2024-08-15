import { FastifyInstance } from 'fastify';
import { errorHandler } from '../handlers/error.handler';

export function setFastifyErrorHandler(app: FastifyInstance) {
  app.setErrorHandler(errorHandler);
}
