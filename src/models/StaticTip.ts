import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import File from './File';

@Entity('static_tip')
class StaticTip {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  description: string;

  @Column('mediumtext')
  text: string;

  @Column('mediumtext')
  markdownText: string;

  @Column('int')
  displaySequence: number;

  @Column('int')
  fileId: number;

  @OneToOne(() => File)
  @JoinColumn({ name: 'file_id' })
  file: File;

  @Column('timestamp')
  createdAt: Date;
}

export default StaticTip;
