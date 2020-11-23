import { getCustomRepository } from 'typeorm';
import DynamicTip from '../models/DynamicTip';
import Block from '../models/Block';
import DynamicTipsRepository from '../repositories/DynamicTipsRepository';
import BlockRepository from '../repositories/BlockRepository';

interface Request {
  opcode: string;
}

interface Response {
  opcode: string;
  dynamicTip: DynamicTip;
}

class GetDynamicTipByOpcodeService {
  public async execute({ opcode }: Request): Promise<Response> {
    const dynamicTipsRepository = getCustomRepository(DynamicTipsRepository);
    const blocksRepository = getCustomRepository(BlockRepository);
    const dynamicTips = await dynamicTipsRepository.find();
    const blocks = await blocksRepository.find();

    const blockFounded = blocks.find(block => {
      return block.opcode === opcode;
    });

    if (!blockFounded) {
      throw Error('Bloco não encontrado!');
    }

    const dynamicTipFounded = dynamicTips.find(dynamicTip => {
      return dynamicTip.blockId === blockFounded.id;
    });

    if (!dynamicTipFounded) {
      throw Error('Dica não encontrada!');
    }

    const response: Response = {
      opcode: blockFounded.opcode,
      dynamicTip: dynamicTipFounded,
    };

    return response;
  }
}
export default GetDynamicTipByOpcodeService;
