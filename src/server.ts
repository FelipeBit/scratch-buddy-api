import 'reflect-metadata';

import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import routes from './routes/index';

import './database';

const port = 3000;
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
app.use(express.static(path.join(__dirname, 'public', 'images')));
app.use(routes);
app.use('/api', routes);

app.listen(port, () => console.log('online'));
