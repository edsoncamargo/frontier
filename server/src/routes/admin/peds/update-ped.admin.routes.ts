import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function updatePedAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/:pedId',
    {
      schema: {
        params: validate.object({
          pedId: validate.string().uuid(),
        }),
        body: validate.object({
          type: validate.string({ message: 'O tipo é obrigatório.' }),
          price: validate
            .number({ message: 'O preço é obrigatório.' })
            .multipleOf(0.01),
          monthlyPrice: validate.number().multipleOf(0.01).optional(),
          description: validate.string().optional(),
          cover: validate.string().url().optional(),
          images: validate.array(validate.string()).default([]),
        }),
      },
    },
    async (request, reply) => {
      const { pedId } = request.params;
      const { type, price, monthlyPrice, description, cover, images } =
        request.body;

      let ped = await prisma.ped.findUnique({ where: { id: pedId } });
      const existingPedByType = await prisma.ped.findUnique({
        where: { type },
      });

      if (!ped)
        throw new ClientError(
          `Um PED com o id '${pedId}' não foi encontrado.`,
          404
        );

      if (existingPedByType && existingPedByType.id !== pedId)
        throw new ClientError(
          `Um PED com o tipo '${type}' já está cadastrado.`,
          409
        );

      ped = await prisma.ped.update({
        where: { id: pedId },
        data: {
          type,
          price,
          monthly_price: monthlyPrice,
          description,
          cover,
          images,
        },
      });

      reply.status(200).send(ped);
    }
  );
}
