import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateBlock1600900669152 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'block',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'opcode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'file_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'block_category_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'block',
      new TableForeignKey({
        columnNames: ['file_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'file',
        // onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'block',
      new TableForeignKey({
        columnNames: ['block_category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'block_category',
        // onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const fileTable: any = await queryRunner.getTable('block');
    const fileForeignKey = fileTable.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('file_id') !== -1,
    );
    await queryRunner.dropForeignKey('block', fileForeignKey);

    const blockCategoryTable: any = await queryRunner.getTable('block');
    const blockCategoryForeignKey = blockCategoryTable.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('block_category_id') !== -1,
    );
    await queryRunner.dropForeignKey('block', blockCategoryForeignKey);

    await queryRunner.dropTable('block');
  }
}
