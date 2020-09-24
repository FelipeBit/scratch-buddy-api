import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBlockCategory1600813164916
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'block_category',
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
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'color',
            type: 'enum',
            enum: [
              'blue',
              'purple',
              'pink',
              'yellow',
              'coral',
              'aqua',
              'green',
              'orange',
              'red',
            ],
            enumName: 'colorEnum',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('block_category');
  }
}
