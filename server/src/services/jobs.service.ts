import cron from 'node-cron';
import { env } from '../env';

const pingMongoAtlas = async () => {
  const startTime = Date.now();

  await fetch(`${env.BACKEND_URL}/api/v1/public/vips`);

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log(
    `\n>> [INFO] Ping enviado ao '${env.BACKEND_URL}/api/v1/public/vips' para manter a conexão ativa.`
      .blue
  );
  console.log(`>> [INFO] Tempo de execução: ${duration} ms.\n\n`.blue);
};

const scheduleCronJobs = () => {
  cron.schedule('*/5 * * * *', pingMongoAtlas);
};

export default scheduleCronJobs;
