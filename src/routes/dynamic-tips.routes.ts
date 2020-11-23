import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import DynamicTipsRepository from '../repositories/DynamicTipsRepository';
import GetDynamicTipByOpcodeService from '../services/GetDynamicTipByOpcodeService';

const dynamicTipsRouter = Router();

dynamicTipsRouter.get('/', async (request: Request, response: Response) => {
  try {
    const dynamicTipsRepository = getCustomRepository(DynamicTipsRepository);
    const dynamicTips = await dynamicTipsRepository.find();

    return response.json(dynamicTips);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

dynamicTipsRouter.get(
  '/:opcode',
  async (request: Request, response: Response) => {
    try {
      const getDynamicTipByOpcodeService = new GetDynamicTipByOpcodeService();

      const dynamicTipFounded = await getDynamicTipByOpcodeService.execute({
        opcode: request.params.opcode,
      });
      return response.json(dynamicTipFounded);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default dynamicTipsRouter;
