import { FastifyInstance } from 'fastify';
import { createUserRoute } from './create-user.normal.routes';

export async function usersPublicRoutes(app: FastifyInstance) {
  await createUserRoute(app);
}
