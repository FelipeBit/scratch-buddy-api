import { MigrationInterface, QueryRunner } from 'typeorm';
import StaticTipSeed from '../seeds/static-tip.seed';

export default class InsertFirstStaticTip1601852249577
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('static_tip')
      .values(StaticTipSeed)
      .execute();
    /*
    StaticTipSeed.map(async staticTip => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('static_tip')
        .values(staticTip)
        .execute();
    });
    */
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM `static_tip`');
    await queryRunner.query('ALTER TABLE `static_tip` AUTO_INCREMENT =1;');
  }
}
