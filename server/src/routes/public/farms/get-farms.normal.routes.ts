import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';

export async function getFarmsRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/', async (_, reply) => {
    const farms = await prisma.farm.findMany({
      orderBy: {
        price: 'desc',
      },
    });

    reply.code(200).send(farms);
  });
}
