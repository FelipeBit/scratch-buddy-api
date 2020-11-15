import { MigrationInterface, QueryRunner } from 'typeorm';
import FileSeed from '../seeds/file.seed';

export default class InsertFirstFile1601848604096
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    FileSeed.map(async file => {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('file')
        .values(file)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM `file`');
    await queryRunner.query('ALTER TABLE `file` AUTO_INCREMENT =1;');
  }
}
