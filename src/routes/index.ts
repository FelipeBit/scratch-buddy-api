import { Router } from 'express';
import staticTipsRouter from './static-tips.routes';

const routes = Router();

routes.use('/static-tips', staticTipsRouter);

export default routes;
