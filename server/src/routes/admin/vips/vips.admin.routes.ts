import { FastifyInstance } from 'fastify';
import { createVipAdminRoute } from './create-vip.admin.routes';
import { updateVipAdminRoute } from './update-vip.admin.routes';

export async function vipsAdminRoutes(app: FastifyInstance) {
  await createVipAdminRoute(app);
  await updateVipAdminRoute(app);
}
