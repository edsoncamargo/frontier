import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';

export async function getVipRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/', async (_, reply) => {
    const vips = await prisma.vip.findMany({
      orderBy: {
        price: 'desc',
      },
    });

    reply.code(200).send(vips);
  });
}
