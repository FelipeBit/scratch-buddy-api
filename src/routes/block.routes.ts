import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import BlockRepository from '../repositories/BlockRepository';

const blockRouter = Router();

blockRouter.get('/', async (request: Request, response: Response) => {
  try {
    const blockRepository = getCustomRepository(BlockRepository);
    const blocks = await blockRepository.find(/* {
      relations: ['block'],
    } */);

    return response.json(blocks);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default blockRouter;
