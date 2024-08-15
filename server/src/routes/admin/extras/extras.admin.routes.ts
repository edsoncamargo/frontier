import { FastifyInstance } from 'fastify';
import { createExtraAdminRoute } from './create-extra.admin.routes';
import { updateExtraAdminRoute } from './update-extra.admin.routes';

export async function extrasAdminRoutes(app: FastifyInstance) {
  await createExtraAdminRoute(app);
  await updateExtraAdminRoute(app);
}
