import 'dotenv/config';

import { z as validate } from 'zod';

const envSchema = validate.object({
  DATABASE_URL: validate.string().url(),

  CLOUDINARY_CLOUD_NAME: validate.string(),
  CLOUDINARY_API_KEY: validate.string(),
  CLOUDINARY_API_SECRET: validate.string(),
  CLOUDINARY_FOLDER: validate.string(),

  DISCORD_CLIENT_ID: validate.string(),
  DISCORD_CLIENT_SECRET: validate.string(),

  JWT_SECRET: validate.string(),
  COOKIE_SECRET: validate.string(),
  COOKIE_MAX_AGE: validate.coerce.number(),

  BACKEND_URL: validate.string().url(),
  FRONTEND_URL: validate.string().url(),

  PORT: validate.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);
