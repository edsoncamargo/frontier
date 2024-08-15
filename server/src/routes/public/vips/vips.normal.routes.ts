import { FastifyInstance } from 'fastify';
import { getVipRoute } from './get-vips.normal.routes';

export async function vipsNormalRoutes(app: FastifyInstance) {
  await getVipRoute(app);
}
