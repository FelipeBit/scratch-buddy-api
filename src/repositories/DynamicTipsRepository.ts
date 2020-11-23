import { EntityRepository, Repository } from 'typeorm';
import DynamicTip from '../models/DynamicTip';

@EntityRepository(DynamicTip)
class DynamicTipsRepository extends Repository<DynamicTip> {
  public async findById(id: number): Promise<DynamicTip | null> {
    const findTip = await this.findOne({
      where: { id },
    });

    return findTip || null;
  }
}

export default DynamicTipsRepository;
