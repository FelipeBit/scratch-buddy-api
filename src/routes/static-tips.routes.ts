import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import StaticTipsRepository from '../repositories/StaticTipsRepository';

const staticTipsRouter = Router();

staticTipsRouter.get('/', async (request: Request, response: Response) => {
  try {
    const staticTipsRepository = getCustomRepository(StaticTipsRepository);
    const staticTips = await staticTipsRepository.find({ relations: ['file'] });

    return response.json(staticTips);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

/*
staticTipsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { provider, date } = request.body;

    const createStaticTip = new CreateStaticTipService();

    const staticTip = await createStaticTip.execute({ provider, date });

    return response.json(staticTip);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
*/

export default staticTipsRouter;
