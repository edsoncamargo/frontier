import { FastifyInstance } from 'fastify';
import { createUpgradeAdminRoute } from './create-upgrade.admin.routes';
import { updateUpgradeAdminRoute } from './update-upgrade.admin.routes';

export async function upgradesAdminRoutes(app: FastifyInstance) {
  await createUpgradeAdminRoute(app);
  await updateUpgradeAdminRoute(app);
}
