import { FastifyInstance } from 'fastify';
import { getHousesRoute } from './get-houses.normal.routes';

export async function housesNormalRoutes(app: FastifyInstance) {
  await getHousesRoute(app);
}
