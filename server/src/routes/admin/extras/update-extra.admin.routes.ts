import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function updateExtraAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/:extraId',
    {
      schema: {
        params: validate.object({
          extraId: validate.string().uuid(),
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
      const { extraId } = request.params;
      const { type, price, monthlyPrice, description, cover, images } =
        request.body;

      let extra = await prisma.extra.findUnique({ where: { id: extraId } });
      const existingExtraByType = await prisma.extra.findUnique({
        where: { type },
      });

      if (!extra)
        throw new ClientError(
          `Um EXTRA com o id '${extraId}' não foi encontrado.`,
          404
        );

      if (existingExtraByType && existingExtraByType.id !== extraId)
        throw new ClientError(
          `Um EXTRA com o tipo '${type}' já está cadastrado.`,
          409
        );

      extra = await prisma.extra.update({
        where: { id: extraId },
        data: {
          type: type,
          price,
          monthly_price: monthlyPrice,
          description,
          cover,
          images,
        },
      });

      reply.status(200).send(extra);
    }
  );
}
