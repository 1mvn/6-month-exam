import { config } from 'dotenv';
config();

export const envConfig = {
  PORT: Number(process.env.PORT),
  DB_URL: String(process.env.DB_URL),
};
