import { FastifyInstance } from 'fastify';
import { createHouseAdminRoute } from './create-house.admin.routes';
import { updateHouseAdminRoute } from './update-house.admin.routes';

export async function housesAdminRoutes(app: FastifyInstance) {
  await createHouseAdminRoute(app);
  await updateHouseAdminRoute(app);
}
