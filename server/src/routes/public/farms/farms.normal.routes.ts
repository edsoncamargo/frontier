import { FastifyInstance } from 'fastify';
import { getFarmsRoute } from './get-farms.normal.routes';

export async function farmsNormalRoutes(app: FastifyInstance) {
  await getFarmsRoute(app);
}
