import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: null })
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ default: null })
  name: string;

  @Column({ default: null })
  email: string;

  @UpdateDateColumn()
  updateTime: string;
}
