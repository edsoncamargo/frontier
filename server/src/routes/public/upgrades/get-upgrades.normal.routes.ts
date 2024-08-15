import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';

export async function getUpgradesRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/', async (_, reply) => {
    const upgrades = await prisma.upgrade.findMany({
      orderBy: {
        price: 'desc',
      },
    });

    reply.code(200).send(upgrades);
  });
}
