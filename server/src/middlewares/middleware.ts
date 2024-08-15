import { FastifyReply, FastifyRequest } from 'fastify';
import { Role, User } from '@prisma/client';

import { prisma } from '../lib/prisma';
import { verifyToken } from '../utils/jwt.utils';

function authAdminMiddleware(
  req: FastifyRequest,
  reply: FastifyReply,
  done: (err?: Error) => void
): void {
  authenticate(req, reply)
    .then(() => isAdmin(reply, req.user!))
    .then(() => done())
    .catch((err) => done(err));
}

function isAdmin(reply: FastifyReply, user: User) {
  if (user.role !== Role.ADMIN) {
    reply.status(403).send({
      error: 'Acesso negado.',
    });

    throw new Error('Acesso negado.');
  }
}

function authNormalMiddleware(
  req: FastifyRequest,
  reply: FastifyReply,
  done: (err?: Error) => void
): void {
  authenticate(req, reply)
    .then(() => done())
    .catch((err) => done(err));
}

async function authenticate(
  req: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const token = req.cookies['AUTH-FRONTIER'];

  if (!token) {
    reply.status(401).send({
      error:
        'Token de autenticação não fornecido. Por favor, faça login e tente novamente.',
    });
    throw new Error(
      'Token de autenticação não fornecido. Por favor, faça login e tente novamente.'
    );
  }

  const decodedToken = verifyToken(token);

  if (!decodedToken) {
    reply.status(401).send({
      error: 'Token de autenticação inválido. Por favor, faça login novamente.',
    });
    throw new Error(
      'Token de autenticação inválido. Por favor, faça login novamente.'
    );
  }

  const { email } = decodedToken;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    reply.status(401).send({
      error:
        'Usuário não encontrado. Por favor, verifique suas credenciais e tente novamente.',
    });
    throw new Error(
      'Usuário não encontrado. Por favor, verifique suas credenciais e tente novamente.'
    );
  }

  req.user = user;
}

export { authAdminMiddleware, authNormalMiddleware };
