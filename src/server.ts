import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello world' });
});

app.listen(3333, () => {
  console.log('Funcionou');
});
