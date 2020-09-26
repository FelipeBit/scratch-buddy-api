import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// eslint-disable-next-line no-shadow
enum EnumCategory {
  blockImage = 'block_image',
  tipImage = 'tip_image',
  messageImage = 'message_image',
}

@Entity('file')
class File {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  path: string;

  @Column('varchar')
  type: string;

  @Column('text')
  fileCategory: EnumCategory;

  @Column('timestamp')
  createdAt: Date;
}

export default File;
