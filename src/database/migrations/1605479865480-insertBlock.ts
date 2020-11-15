import { MigrationInterface, QueryRunner } from 'typeorm';
import Blocks from '../seeds/block.seed';

export default class insertBlock1605479865480 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    Blocks.map(async block => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('block')
        .values(block)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM `block`');
    await queryRunner.query('ALTER TABLE `block` AUTO_INCREMENT =1;');
  }
}
