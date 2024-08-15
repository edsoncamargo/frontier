import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function createVipAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/',
    {
      schema: {
        body: validate.object({
          type: validate.string({ message: 'O tipo é obrigatório.' }),
          price: validate
            .number({ message: 'O preço é obrigatório.' })
            .multipleOf(0.01),
          monthlyPrice: validate.number().multipleOf(0.01).optional(),
          additionalBonuses: validate.record(validate.any()).optional(),
          description: validate.string().optional(),
          cover: validate.string().url().optional(),
          images: validate.array(validate.string()).default([]),
        }),
      },
    },
    async (request, reply) => {
      const {
        type,
        price,
        monthlyPrice,
        additionalBonuses,
        description,
        cover,
        images,
      } = request.body;

      let vip = await prisma.vip.findUnique({ where: { type } });
      if (vip)
        throw new ClientError(
          `Um VIP com o tipo '${type}' já está cadastrado.`,
          409
        );

      vip = await prisma.vip.create({
        data: {
          type,
          price,
          monthly_price: monthlyPrice,
          additional_bonuses: additionalBonuses,
          description,
          cover,
          images,
        },
      });

      reply.status(201).send(vip);
    }
  );
}
