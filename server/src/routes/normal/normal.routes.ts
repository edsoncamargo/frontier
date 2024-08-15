import { FastifyInstance } from 'fastify';
import { authNormalMiddleware } from '../../middlewares/middleware';
import { usersNormalRoutes } from './users/users.normal.routes';

export async function normalRoutes(app: FastifyInstance) {
  app.addHook('preHandler', authNormalMiddleware);
  app.register(usersNormalRoutes, { prefix: '/users' });
}
