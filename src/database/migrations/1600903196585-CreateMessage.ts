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
        name: 'message',
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
            name: 'repeat',
            type: 'int',
            isNullable: false,
            default: '0',
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['error', 'tip'],
            enumName: 'typeEnum',
          },
          {
            name: 'block_id',
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
      'message',
      new TableForeignKey({
        columnNames: ['block_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'block',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable('message');
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('block_id') !== -1,
    );
    await queryRunner.dropForeignKey('message', foreignKey);

    await queryRunner.dropTable('message');
  }
}
