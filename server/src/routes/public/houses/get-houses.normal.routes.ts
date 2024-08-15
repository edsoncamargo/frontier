import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';

export async function getHousesRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/', async (_, reply) => {
    const houses = await prisma.house.findMany({
      orderBy: {
        price: 'desc',
      },
    });

    reply.code(200).send(houses);
  });
}
