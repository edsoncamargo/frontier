import Fastify from 'fastify';
import { env } from './env';
import { setFastifyCookie } from './lib/fastify-cookie';
import { setFastifyCors } from './lib/fastify-cors';
import { setFastifyErrorHandler } from './lib/fastify-error-handler';
import { setFastifyMultipart } from './lib/fastify-multipart';
import { setOAuth } from './lib/fastify-oauth';
import { setRoutes } from './routes/routes';
import { setSwagger } from './lib/swagger';
import { setValidatorCompiler } from './lib/zod';

const app = Fastify({ logger: true });

const start = async () => {
  try {
    setFastifyCors(app);
    setFastifyErrorHandler(app);
    setFastifyCookie(app);
    setOAuth(app);
    setFastifyMultipart(app);
    setSwagger(app);
    setValidatorCompiler(app);
    setRoutes(app);

    await app.ready();
    await app.listen({ host: '0.0.0.0', port: env.PORT || 10000 });

    console.log(`\nServer is running at ${env.BACKEND_URL} ✅\n`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
