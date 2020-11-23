import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateStaticTip1600904132673
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'static_tip',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'text',
            type: 'mediumtext',
            isNullable: true,
          },
          {
            name: 'markdown_text',
            type: 'mediumtext',
            isNullable: true,
          },
          {
            name: 'display_sequence',
            type: 'int',
            isNullable: false,
            default: '0',
          },
          {
            name: 'file_id',
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
      'static_tip',
      new TableForeignKey({
        columnNames: ['file_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'file',
        // onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const fileTable: any = await queryRunner.getTable('static_tip');
    const fileForeignKey = fileTable.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('file_id') !== -1,
    );
    await queryRunner.dropForeignKey('static_tip', fileForeignKey);

    await queryRunner.dropTable('static_tip');
  }
}
