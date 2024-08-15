import { FastifyInstance } from 'fastify';
import { getExtraRoute } from './get-extras.normal.routes';

export async function extrasNormalRoutes(app: FastifyInstance) {
  await getExtraRoute(app);
}
