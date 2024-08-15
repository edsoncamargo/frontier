import { FastifyInstance } from 'fastify';
import { createUserAdminRoute } from './create-user.admin.routes';
import { getUserAdminRoute } from './get-users.admin.routes';

export async function usersAdminRoutes(app: FastifyInstance) {
  await createUserAdminRoute(app);
  await getUserAdminRoute(app);
}
