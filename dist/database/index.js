"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Block_1 = __importDefault(require("../models/Block"));
var BlockCategory_1 = __importDefault(require("../models/BlockCategory"));
var DynamicTip_1 = __importDefault(require("../models/DynamicTip"));
var File_1 = __importDefault(require("../models/File"));
var StaticTip_1 = __importDefault(require("../models/StaticTip"));
typeorm_1.createConnection({
    type: 'mysql',
    host: 'databasesb.cuouwoldpnrr.us-east-2.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: '99812827932932',
    database: 'databasesb',
    synchronize: true,
    logging: false,
    entities: [Block_1.default, DynamicTip_1.default, BlockCategory_1.default, File_1.default, StaticTip_1.default],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations',
        entitiesDir: './src/models/',
    },
    subscribers: ['./src/subscriber/**/*.ts'],
});
