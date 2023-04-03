import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

enum UserStatus {
  disabled = 0,
  enabled = 1,
}

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

  @Column({ default: UserStatus.enabled })
  status?: UserStatus;

  @UpdateDateColumn()
  updateTime: string;
}
