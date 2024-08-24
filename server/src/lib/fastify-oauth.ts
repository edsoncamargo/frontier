import { FastifyInstance } from 'fastify';
import { env } from '../env';
import oauthPlugin from '@fastify/oauth2';

export function setOAuth(app: FastifyInstance) {
  const options: any = {
    name: 'discordOAuth2',
    credentials: {
      client: {
        id: env.DISCORD_CLIENT_ID,
        secret: env.DISCORD_CLIENT_SECRET,
      },
      auth: oauthPlugin.DISCORD_CONFIGURATION,
    },
    startRedirectPath: '/api/v1/public/login/discord',
    callbackUri: `${env.BACKEND_URL}/api/v1/public/login/discord/callback`,
    scope: ['identify', 'email', 'guilds'],
    generateStateFunction: () => true,
    checkStateFunction: () => true,
  };

  app.register(oauthPlugin, options);
}
