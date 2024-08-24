import 'colors';

import Fastify from 'fastify';
import { env } from './env';
import scheduleCronJobs from './services/jobs.service';
import { setFastifyCookie } from './lib/fastify-cookie';
import { setFastifyCors } from './lib/fastify-cors';
import { setFastifyErrorHandler } from './lib/fastify-error-handler';
import { setFastifyMultipart } from './lib/fastify-multipart';
import { setOAuth } from './lib/fastify-oauth';
import { setRoutes } from './routes/routes';
import { setSwagger } from './lib/swagger';
import { setValidatorCompiler } from './lib/zod';

const app = Fastify();

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

    console.log(
      `\n>> [INFO] Server está rodando em: ${env.BACKEND_URL} ✅\n`.blue
    );

    scheduleCronJobs();
  } catch (err) {
    console.log(`\n>> [ERROR]: ${err}`.red);
    process.exit(1);
  }
};

start();
