import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Block from './Block';
// eslint-disable-next-line no-shadow
enum EnumType {
  error = 'error',
  tip = 'tip',
  intro = 'intro',
  outside = 'outside',
  topBlock = 'top_block',
}

@Entity({ name: 'dynamic_tip' })
class BlockCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'text', type: 'mediumtext' })
  text: string;

  @Column({ name: 'markdown_text', type: 'mediumtext' })
  markdownText: string;

  @Column({ name: 'seconds_until_display', type: 'int' })
  secondsUntilDisplay: number;

  @Column({ name: 'seconds_displaying', type: 'int' })
  secondsDisplaying: number;

  @Column({ name: 'show', type: 'int' })
  show: number;

  @Column({ name: 'type', type: 'text', default: 'tip' })
  type: EnumType;

  @Column({ name: 'block_id', type: 'int' })
  blockId: number;
  /*
  @ManyToOne(() => Block)
  @JoinColumn({ name: 'block_id' })
  block: Block;
  */

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

export default BlockCategory;
