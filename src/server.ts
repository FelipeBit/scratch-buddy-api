import 'reflect-metadata';

import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';

import './database';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const compression = require('compression');

const port = 3333;
const app = express();

function shouldCompress(req: Request, res: Response) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

app.use(compression({ filter: shouldCompress }));

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(routes);
app.use('/api', routes);

app.listen(port, () => console.log('online'));
