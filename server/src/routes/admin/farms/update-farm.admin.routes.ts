import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function updateFarmAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/:farmId',
    {
      schema: {
        params: validate.object({
          farmId: validate.string().uuid(),
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
      const { farmId } = request.params;
      const { type, price, monthlyPrice, description, cover, images } =
        request.body;

      let farm = await prisma.farm.findUnique({ where: { id: farmId } });
      const existingFarmByType = await prisma.farm.findUnique({
        where: { type },
      });

      if (!farm)
        throw new ClientError(
          `Uma FAZENDA com o id '${farmId}' não foi encontrada.`,
          404
        );

      if (existingFarmByType && existingFarmByType.id !== farmId)
        throw new ClientError(
          `Uma FAZENDA com o tipo '${type}' já está cadastrada.`,
          409
        );

      farm = await prisma.farm.update({
        where: { id: farmId },
        data: {
          type: type,
          price,
          monthly_price: monthlyPrice,
          description,
          cover,
          images,
        },
      });

      reply.status(200).send(farm);
    }
  );
}
