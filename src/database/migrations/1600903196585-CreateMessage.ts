import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateMessage1600903196585 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dynamic_tip',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
            name: 'seconds_until_display',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'seconds_displaying',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'show',
            type: 'int',
            isNullable: false,
            default: '1',
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['error', 'tip', 'intro', 'outside', 'top_block'],
            enumName: 'typeEnum',
          },
          {
            name: 'block_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    /*
    await queryRunner.createForeignKey(
      'dynamic_tip',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'block',
        // onDelete: 'CASCADE',
      }),
    );
    */
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /*
    const table: any = await queryRunner.getTable('dynamic_tip');
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('block_id') !== -1,
    );
    await queryRunner.dropForeignKey('dynamic_tip', foreignKey);
    */

    await queryRunner.dropTable('dynamic_tip');
  }
}
