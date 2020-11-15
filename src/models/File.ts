import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// eslint-disable-next-line no-shadow
enum EnumCategory {
  blockImage = 'block_image',
  tipImage = 'tip_image',
  messageImage = 'message_image',
}

@Entity({ name: 'file' })
class File {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'path', type: 'varchar' })
  path: string;

  @Column({ name: 'type', type: 'varchar' })
  type: string;

  @Column({ name: 'file_category', type: 'text', default: 'tip_image' })
  fileCategory: EnumCategory;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

export default File;
