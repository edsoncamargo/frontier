import { FastifyInstance } from 'fastify';
import { getUpgradesRoute } from './get-upgrades.normal.routes';

export async function upgradesNormalRoutes(app: FastifyInstance) {
  await getUpgradesRoute(app);
}
