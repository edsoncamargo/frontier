import { FastifyInstance } from 'fastify';
import { authAdminMiddleware } from '../../middlewares/middleware';
import { extrasAdminRoutes } from './extras/extras.admin.routes';
import { farmsAdminRoutes } from './farms/farms.admin.routes';
import { housesAdminRoutes } from './houses/houses.admin.routes';
import { imagesAdminRoutes } from './images/images.admin.routes';
import { pedsAdminRoutes } from './peds/peds.admin.routes';
import { upgradesAdminRoutes } from './upgrades/upgrades.admin.routes';
import { usersAdminRoutes } from './users/users.admin.routes';
import { vipsAdminRoutes } from './vips/vips.admin.routes';

export async function adminRoutes(app: FastifyInstance) {
  app.addHook('preHandler', authAdminMiddleware);
  app.register(usersAdminRoutes, { prefix: '/users' });
  app.register(vipsAdminRoutes, { prefix: '/vips' });
  app.register(housesAdminRoutes, { prefix: '/houses' });
  app.register(pedsAdminRoutes, { prefix: '/peds' });
  app.register(imagesAdminRoutes, { prefix: '/images' });
  app.register(farmsAdminRoutes, { prefix: '/farms' });
  app.register(upgradesAdminRoutes, { prefix: '/upgrades' });
  app.register(extrasAdminRoutes, { prefix: '/extras' });
}
