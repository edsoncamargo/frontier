import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function updateUpgradeAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/:upgradeId',
    {
      schema: {
        params: validate.object({
          upgradeId: validate.string().uuid(),
        }),
        body: validate.object({
          type: validate.string({ message: 'O tipo é obrigatório.' }),
          price: validate
            .number({ message: 'O preço é obrigatório.' })
            .multipleOf(0.01),
          capacity: validate.coerce.number(),
          monthlyPrice: validate.number().multipleOf(0.01).optional(),
          description: validate.string().optional(),
          cover: validate.string().url().optional(),
          images: validate.array(validate.string()).default([]),
        }),
      },
    },
    async (request, reply) => {
      const { upgradeId } = request.params;
      const {
        type,
        price,
        capacity,
        monthlyPrice,
        description,
        cover,
        images,
      } = request.body;

      let upgrade = await prisma.upgrade.findUnique({
        where: { id: upgradeId },
      });
      const existingUpgradeByType = await prisma.upgrade.findUnique({
        where: { type },
      });

      if (!upgrade)
        throw new ClientError(
          `Uma MELHORIA com o id '${upgradeId}' não foi encontrada.`,
          404
        );

      if (existingUpgradeByType && existingUpgradeByType.id !== upgradeId)
        throw new ClientError(
          `Uma MELHORIA com o tipo '${type}' já está cadastrada.`,
          409
        );

      upgrade = await prisma.upgrade.update({
        where: { id: upgradeId },
        data: {
          type: type,
          price,
          capacity,
          monthly_price: monthlyPrice,
          description,
          cover,
          images,
        },
      });

      reply.status(200).send(upgrade);
    }
  );
}
