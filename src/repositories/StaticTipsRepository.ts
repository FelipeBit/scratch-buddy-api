import { EntityRepository, Repository } from 'typeorm';
import StaticTip from '../models/StaticTip';

@EntityRepository(StaticTip)
class StaticTipsRepository extends Repository<StaticTip> {
  public async findById(id: number): Promise<StaticTip | null> {
    const findTip = await this.findOne({
      where: { id },
    });

    return findTip || null;
  }
}

export default StaticTipsRepository;
