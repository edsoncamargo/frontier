import { FastifyInstance } from 'fastify';
import { getImagesAdminRoute } from './get-images.admin.routes';
import { uploadImagesAdminRoute } from './upload-images.admin.routes';

export async function imagesAdminRoutes(app: FastifyInstance) {
  await uploadImagesAdminRoute(app);
  await getImagesAdminRoute(app);
}
