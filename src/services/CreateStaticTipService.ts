import { getCustomRepository } from 'typeorm';
import StaticTip from '../models/StaticTip';
import StaticTipsRepository from '../repositories/StaticTipsRepository';

interface Request {
  provider: string;
  date: string;
}

class CreateStaticTipService {
  public async execute({ provider, date }: Request): Promise<StaticTip> {
    const staticTipsRepository = getCustomRepository(StaticTipsRepository);

    // if () ... throw Error('Erro xxx')
    const staticTip = staticTipsRepository.create({ provider, date });

    await staticTipsRepository.save(staticTip);

    return staticTip;
  }
}
export default CreateStaticTipService;
