import { ClientError } from '../errors/client.error';
import { Stream } from 'stream';
import { v2 as cloudinaryLib } from 'cloudinary';
import { env } from '../env';

cloudinaryLib.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

async function bufferFromStream(fileStream: Stream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    fileStream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    fileStream.on('end', () => resolve(Buffer.concat(chunks)));
    fileStream.on('error', (error) =>
      reject(new Error(`Stream error: ${error.message}`))
    );
  });
}

async function uploadToCloudinary(
  buffer: Buffer,
  folder: string
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    cloudinaryLib.uploader
      .upload_stream({ folder }, (error, result) => {
        if (error) {
          reject(
            new ClientError(`Falhou ao enviar imagens: ${error.message} ⚠️`)
          );
        } else {
          resolve(result!.secure_url);
        }
      })
      .end(buffer);
  });
}

async function uploadImage(
  fileStream: Stream,
  folder: string
): Promise<string> {
  try {
    folder = `${env.CLOUDINARY_FOLDER}/${folder}`;

    const buffer = await bufferFromStream(fileStream);
    return await uploadToCloudinary(buffer, folder);
  } catch (error: any) {
    throw new ClientError(`Falhou ao enviar imagens: ${error.message} ⚠️`);
  }
}

async function listFiles(
  folder: string,
  itemsPerPage: number,
  nextPage?: string
) {
  return cloudinaryLib.search
    .expression(`folder:${env.CLOUDINARY_FOLDER}/${folder}`)
    .sort_by('created_at', 'desc')
    .max_results(itemsPerPage)
    .next_cursor(nextPage)
    .execute();
}

export const cloudinaryService = {
  uploadImage,
  listFiles,
};
