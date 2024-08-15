import { ClientError } from '../../../errors/client.error';
import { FOLDER } from '../../../models/folder.enum';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { cloudinaryService } from '../../../lib/cloudinary';
import { z as validate } from 'zod';

const FolderValues = Object.values(FOLDER) as [
  (typeof FOLDER)[keyof typeof FOLDER],
  ...(typeof FOLDER)[keyof typeof FOLDER][]
];

export async function getImagesAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/:folderName',
    {
      schema: {
        querystring: validate.object({
          itemsPerPage: validate.coerce.number().optional(),
          nextPage: validate.string().optional(),
        }),
        params: validate.object({
          folderName: validate.enum(FolderValues),
        }),
      },
    },
    async (request, reply) => {
      let { itemsPerPage, nextPage } = request.query;
      const { folderName } = request.params;

      itemsPerPage = itemsPerPage ?? 10;

      const files = await cloudinaryService.listFiles(
        folderName,
        itemsPerPage,
        nextPage
      );

      if (!files || (files && files.resources.length <= 0))
        throw new ClientError('Nenhuma imagem encontrada ⚠️', 404);

      const urls = files.resources.map((file: any) => {
        return {
          url: file.url,
          format: file.format,
        };
      });

      return {
        totalFiles: files.total_count,
        totalPage: Math.ceil(files.total_count / itemsPerPage),
        nextCursor: files.next_cursor ?? null,
        urls,
      };
    }
  );
}
