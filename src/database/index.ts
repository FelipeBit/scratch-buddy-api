import { createConnection } from 'typeorm';

import DynamicTip from '../models/DynamicTip';

createConnection({
  type: 'mysql',
  host: 'databasesb.cuouwoldpnrr.us-east-2.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: '99812827932932',
  database: 'databasesb',
  synchronize: true,
  logging: false,
  entities: [DynamicTip],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/models/',
  },
  subscribers: ['./src/subscriber/**/*.ts'],
});
