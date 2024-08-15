import { ClientError } from '../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodError } from 'zod';

type FastifyErrorHandler = FastifyInstance['errorHandler'];

export const errorHandler: FastifyErrorHandler = (error, _, reply) => {
  console.log(error);

  if (error instanceof ZodError) {
    void reply
      .status(400)
      .send({ message: 'Invalid input', errors: error.flatten().fieldErrors });
    return;
  }

  if (error instanceof ClientError) {
    void reply.status(error.status).send({ message: error.message });
    return;
  }

  void reply.status(500).send({ message: 'Internal server error ⚠️' });
};
