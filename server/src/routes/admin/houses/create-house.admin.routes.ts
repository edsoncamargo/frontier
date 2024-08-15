import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function createHouseAdminRoute(app: FastifyInstance) {
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
          description: validate.string().optional(),
          cover: validate.string().url().optional(),
          images: validate.array(validate.string()).default([]),
        }),
      },
    },
    async (request, reply) => {
      const { type, price, monthlyPrice, description, cover, images } =
        request.body;

      let house = await prisma.house.findUnique({ where: { type } });
      if (house)
        throw new ClientError(
          `Uma CASA com o tipo '${type}' já está cadastrada.`,
          409
        );

      house = await prisma.house.create({
        data: {
          type,
          price,
          monthly_price: monthlyPrice,
          description,
          cover,
          images,
        },
      });

      reply.status(201).send(house);
    }
  );
}
