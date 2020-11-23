import { Router } from 'express';
import staticTipsRouter from './static-tips.routes';
import dinamycTipsRouter from './dynamic-tips.routes';
import blockRouter from './block.routes';

const routes = Router();

routes.use('/static-tips', staticTipsRouter);
routes.use('/dynamic-tips', dinamycTipsRouter);
routes.use('/blocks', blockRouter);

export default routes;
