import { ClientError } from '../../../errors/client.error';
import { FOLDER } from '../../../models/folder.enum';
import { FastifyInstance } from 'fastify';
import { Readable } from 'stream';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { cloudinaryService } from '../../../lib/cloudinary';
import { z as validate } from 'zod';

const FolderValues = Object.values(FOLDER) as [
  (typeof FOLDER)[keyof typeof FOLDER],
  ...(typeof FOLDER)[keyof typeof FOLDER][]
];

export async function uploadImagesAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/:folderName',
    {
      schema: {
        params: validate.object({
          folderName: validate.enum(FolderValues),
        }),
      },
    },
    async (request, reply) => {
      const { folderName } = request.params;

      const parts = request.parts();
      const files = [];

      for await (const part of parts) {
        if (part.file && part.fieldname === 'images') {
          const buffers = [];
          for await (const chunk of part.file) {
            buffers.push(chunk);
          }
          const buffer = Buffer.concat(buffers);

          files.push({
            file: buffer,
            filename: part.filename,
            mimetype: part.mimetype,
          });
        } else {
          await part.toBuffer();
        }
      }

      if (files.length === 0) {
        return reply.status(400).send({ message: 'No images uploaded' });
      }

      const uploadPromises = files.map(async (file) => {
        try {
          const stream = new Readable();
          stream.push(file.file);
          stream.push(null);
          const url = await cloudinaryService.uploadImage(stream, folderName);
          return url;
        } catch (error) {
          throw new ClientError('Arquivo inválido ⚠️');
        }
      });

      const urls = await Promise.all(uploadPromises);

      return { urls };
    }
  );
}
