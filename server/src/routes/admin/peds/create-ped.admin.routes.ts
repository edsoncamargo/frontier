import { ClientError } from '../../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

export async function createPedAdminRoute(app: FastifyInstance) {
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

      let ped = await prisma.ped.findUnique({ where: { type } });
      if (ped)
        throw new ClientError(
          `Um PED com o tipo '${type}' já está cadastrado.`,
          409
        );

      ped = await prisma.ped.create({
        data: {
          type,
          price,
          monthly_price: monthlyPrice,
          description,
          cover,
          images,
        },
      });

      reply.status(201).send(ped);
    }
  );
}
