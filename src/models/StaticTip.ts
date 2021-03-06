import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import File from './File';

@Entity({ name: 'static_tip' })
class StaticTip {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'text', type: 'mediumtext' })
  text: string;

  @Column({ name: 'markdown_text', type: 'mediumtext' })
  markdownText: string;

  @Column({ name: 'display_sequence', type: 'int' })
  displaySequence: number;

  @Column({ name: 'file_id', type: 'int' })
  fileId: number;

  @OneToOne(() => File)
  @JoinColumn({ name: 'file_id' })
  file: File;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

export default StaticTip;
