import { AccountType } from '@prisma/client';
import { ClientError } from '../../errors/client.error';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { env } from '../../env';
import { generateToken } from '../../utils/jwt.utils';
import { prisma } from '../../lib/prisma';

export async function loginDiscordNormalRoute(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/discord/callback', async (request, reply: any) => {
      const { code } = request.query as { code: string };

      if (!code) {
        throw new ClientError('Código de autorização não fornecido ⚠️', 401);
      }

      try {
        const accessToken = await fetchToken(code);
        const userData = await fetchUserData(accessToken);

        await handleLogin(userData, reply);
      } catch (error) {
        console.log(error);
        throw new ClientError('Erro ao processar a autenticação ⚠️', 401);
      }
    });
}

async function fetchToken(code: string): Promise<string> {
  const response = await fetch('https://discord.com/api/v10/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `${env.BACKEND_URL}/api/v1/public/login/discord/callback`,
    }),
  });

  if (!response.ok)
    throw new ClientError(
      `Erro ao obter o token: ${response.statusText} ⚠️`,
      401
    );

  const data = await response.json();
  return data.access_token;
}

async function fetchUserData(accessToken: string) {
  const response = await fetch('https://discord.com/api/v10/users/@me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new ClientError(
      `Erro ao obter informações do usuário: ${response.statusText} ⚠️`,
      401
    );
  }

  const userData = await response.json();

  const avatarUrl = userData.avatar
    ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
    : 'https://cdn.discordapp.com/embed/avatars/0.png';

  return {
    email: userData.email,
    username: userData.username,
    avatar: avatarUrl,
  };
}

async function handleLogin(
  userData: { email: any; username: any; avatar: string },
  reply: any
) {
  const alreadyExistUserByEmail = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (!alreadyExistUserByEmail) {
    await prisma.user.create({
      data: {
        email: userData.email,
        name: userData.username,
        account_type: AccountType.DISCORD,
        avatar: userData.avatar,
      },
    });
  }

  const loggedUser = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  const token = generateToken({
    id: loggedUser!.id,
    email: loggedUser!.email,
    name: loggedUser!.name,
    account_type: loggedUser!.account_type,
    role: loggedUser!.role,
    password: null,
    avatar: loggedUser!.avatar,
    created_at: loggedUser!.created_at,
  });

  reply.setCookie('AUTH-FRONTIER', token, {
    httpOnly: true,
    path: '/',
    maxAge: env.COOKIE_MAX_AGE,
    sameSite: 'Strict',
  });

  reply.redirect(`${env.FRONTEND_URL}/?token=${token}`);
}
