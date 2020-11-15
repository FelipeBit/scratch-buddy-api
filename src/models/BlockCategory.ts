import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// eslint-disable-next-line no-shadow

@Entity({ name: 'block_category' })
class BlockCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'color', type: 'varchar' })
  color: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

export default BlockCategory;
