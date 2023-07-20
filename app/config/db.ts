import config from './db.config';

import { Sequelize, Dialect } from 'sequelize';

// Connection parameters
const sequelizeConnection = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    port: config.port,
    host: config.HOST,
    dialect: config.dialect as Dialect,
  },
);

const testDbConnection = async () => {
  try {
    await sequelizeConnection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(
      'Unable to connect to the database:',
      error,
    );
  }
};

export {
  sequelizeConnection,
  testDbConnection,
};
