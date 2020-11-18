import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import File from './File';
import BlockCategory from './BlockCategory';

@Entity({ name: 'block' })
class Block {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'opcode', type: 'varchar' })
  opcode: string;

  @Column({ name: 'file_id', type: 'int' })
  fileId: number;

  @Column({ name: 'block_category_id', type: 'int' })
  blockCategoryId: number;

  // @OneToOne(() => File)
  @ManyToOne(() => File)
  @JoinColumn({ name: 'file_id' })
  file: File;

  @ManyToOne(() => BlockCategory)
  @JoinColumn({ name: 'block_category_id' })
  BlockCategory: BlockCategory;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

export default Block;
