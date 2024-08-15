import { FastifyInstance } from 'fastify';
import { createFarmAdminRoute } from './create-farm.admin.routes';
import { updateFarmAdminRoute } from './update-farm.admin.routes';

export async function farmsAdminRoutes(app: FastifyInstance) {
  await createFarmAdminRoute(app);
  await updateFarmAdminRoute(app);
}
