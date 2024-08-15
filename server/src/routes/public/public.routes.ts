import { FastifyInstance } from 'fastify';
import { extrasNormalRoutes } from './extras/extras.normal.routes';
import { farmsNormalRoutes } from './farms/farms.normal.routes';
import { housesNormalRoutes } from './houses/houses.normal.routes';
import { loginDiscordNormalRoute } from './login-discord.routes';
import { loginNormalRoute } from './login.routes';
import { pedsNormalRoutes } from './peds/peds.normal.routes';
import { upgradesNormalRoutes } from './upgrades/upgrades.normal.routes';
import { usersPublicRoutes } from './users/users.public.routes';
import { vipsNormalRoutes } from './vips/vips.normal.routes';

export async function publicRoutes(app: FastifyInstance) {
  app.register(loginNormalRoute, { prefix: '/login' });
  app.register(loginDiscordNormalRoute, { prefix: '/login' });
  app.register(usersPublicRoutes, { prefix: '/users' });
  app.register(vipsNormalRoutes, { prefix: '/vips' });
  app.register(housesNormalRoutes, { prefix: '/houses' });
  app.register(pedsNormalRoutes, { prefix: '/peds' });
  app.register(farmsNormalRoutes, { prefix: '/farms' });
  app.register(upgradesNormalRoutes, { prefix: '/upgrades' });
  app.register(extrasNormalRoutes, { prefix: '/extras' });
}
