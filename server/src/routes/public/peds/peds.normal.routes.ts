import { FastifyInstance } from 'fastify';
import { getPedsRoute } from './get-peds.normal.routes';

export async function pedsNormalRoutes(app: FastifyInstance) {
  await getPedsRoute(app);
}
