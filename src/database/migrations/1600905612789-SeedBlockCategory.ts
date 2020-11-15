import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import BlockCategorySeed from '../seeds/block-category.seed';

export default class SeedBlockCategory1600905612789
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query('ALTER TABLE `block_category` AUTO_INCREMENT = 1');
    BlockCategorySeed.map(async blockCategory => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('block_category')
        .values(blockCategory)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM `block_category`');
    await queryRunner.query('ALTER TABLE `block_category` AUTO_INCREMENT = 1');
  }
}
