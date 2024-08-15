import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';

export async function getPedsRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/', async (_, reply) => {
    const peds = await prisma.ped.findMany({
      orderBy: {
        price: 'desc',
      },
    });

    reply.code(200).send(peds);
  });
}
