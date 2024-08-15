import { FastifyInstance } from 'fastify';
import { adminRoutes } from './admin/admin.routes';
import { normalRoutes } from './normal/normal.routes';
import { publicRoutes } from './public/public.routes';

export function setRoutes(app: FastifyInstance) {
  app.register(publicRoutes, {
    prefix: '/api/v1/public',
  });

  app.register(normalRoutes, {
    prefix: '/api/v1/normal',
  });

  app.register(adminRoutes, {
    prefix: '/api/v1/admin',
  });
}
