import { FastifyInstance } from 'fastify';
import { createPedAdminRoute } from './create-ped.admin.routes';
import { updatePedAdminRoute } from './update-ped.admin.routes';

export async function pedsAdminRoutes(app: FastifyInstance) {
  await createPedAdminRoute(app);
  await updatePedAdminRoute(app);
}
