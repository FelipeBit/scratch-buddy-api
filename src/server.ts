import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import routes from './routes/index';

import './database';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(routes);

app.listen(port, () => console.log('online'));
