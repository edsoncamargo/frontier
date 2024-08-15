import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';

export async function getExtraRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/', async (_, reply) => {
    const extras = await prisma.extra.findMany({
      orderBy: {
        price: 'desc',
      },
    });

    reply.code(200).send(extras);
  });
}
