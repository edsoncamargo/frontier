import cron from 'node-cron';
import { prisma } from '../lib/prisma';

const pingMongoAtlas = async () => {
  const startTime = Date.now();

  await prisma.user.findMany();

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log(
    '\n>> [INFO] Ping enviado ao MongoDB Atlas para manter a conexão ativa.'
      .blue
  );
  console.log(`>> [INFO] Tempo de execução: ${duration} ms.\n\n`.blue);
};

const scheduleCronJobs = () => {
  cron.schedule('*/15 * * * *', pingMongoAtlas);
};

export default scheduleCronJobs;
