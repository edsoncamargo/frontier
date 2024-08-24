import { ClientError } from '../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { env } from '../../env';
import { generateToken } from '../../utils/jwt.utils';
import { isValidPassword } from '../../services/password.service';
import { prisma } from '../../lib/prisma';
import { z as validate } from 'zod';

export async function loginNormalRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/',
    {
      schema: {
        body: validate.object({
          email: validate
            .string()
            .email({ message: 'O email inserido não é válido' }),
          password: validate
            .string()
            .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
            .max(50, {
              message: 'A senha deve ter menos de 50 caracteres',
            })
            .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, {
              message:
                'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*)',
            }),
        }),
      },
    },
    async (request, reply: any) => {
      const { email, password } = request.body;
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) throw new ClientError('Credenciais inválidas', 401);

      const canLogin = await isValidPassword(password, user.password!);

      if (!canLogin) throw new ClientError('Credenciais inválidas', 401);

      const token = generateToken({
        id: user.id,
        email: user.email,
        name: user.name,
        account_type: user.account_type,
        role: user.role,
        password: null,
        avatar: null,
        created_at: new Date(),
        is_user_in_guild: user.is_user_in_guild,
      });

      reply.setCookie('AUTH-FRONTIER', token, {
        httpOnly: true,
        path: '/',
        maxAge: env.COOKIE_MAX_AGE,
        sameSite: 'Strict',
      });

      reply.send({
        message: 'Login bem-sucedido ✅',
      });
    }
  );
}
