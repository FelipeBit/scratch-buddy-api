import { createConnection } from 'typeorm';

import Block from '../models/Block';
import BlockCategory from '../models/BlockCategory';
import DynamicTip from '../models/DynamicTip';
import File from '../models/File';
import StaticTip from '../models/StaticTip';

createConnection({
  type: 'mysql',
  host: 'databasesb.cuouwoldpnrr.us-east-2.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: '99812827932932',
  database: 'databasesb',
  synchronize: true,
  logging: false,
  entities: [Block, DynamicTip, BlockCategory, File, StaticTip],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/models/',
  },
  subscribers: ['./src/subscriber/**/*.ts'],
});
