import { MigrationInterface, QueryRunner } from 'typeorm';
import DynamicTipSeed from '../seeds/dynamic-tip.seed';

export default class InsertDynamicTip1605832374928
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    DynamicTipSeed.map(async dynamicTip => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('dynamic_tip')
        .values(dynamicTip)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM `dynamic_tip`');
    await queryRunner.query('ALTER TABLE `dynamic_tip` AUTO_INCREMENT =1;');
  }
}
