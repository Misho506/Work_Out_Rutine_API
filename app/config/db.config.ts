import dotenv from "dotenv"

dotenv.config()

export default {
  HOST: process.env.ENV_HOST,
  USER: process.env.ENV_USER,
  PASSWORD: process.env.ENV_PASSWORD,
  DB: process.env.ENV_DB,
  dialect: process.env.ENV_DIALECT,
  port: parseInt(process.env.ENV_PORT),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
