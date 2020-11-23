import { EntityRepository, Repository } from 'typeorm';
import Block from '../models/Block';

@EntityRepository(Block)
class BlockRepository extends Repository<Block> {
  public async findById(id: number): Promise<Block | null> {
    const findTip = await this.findOne({
      where: { id },
    });

    return findTip || null;
  }
}

export default BlockRepository;
