import { z as validate } from 'zod';

const envSchema = validate.object({
  VITE_BACKEND_URL: validate.string().url(),
});

export const env = envSchema.parse(import.meta.env);
