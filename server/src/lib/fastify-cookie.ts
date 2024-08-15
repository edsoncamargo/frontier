import { FastifyInstance } from 'fastify';
import fastifyCookie from 'fastify-cookie';

export function setFastifyCookie(app: FastifyInstance) {
  app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET as string,
  });
}
