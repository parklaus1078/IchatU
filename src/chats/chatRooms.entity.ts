import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChatLog } from './chatLogs.entity';

@Entity({ name: 'ChatRooms' })
export class ChatRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false, nullable: false })
  is_secret: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false })
  keyword: string;

  @Column({ type: 'int', nullable: false })
  host_id: number;

  @Column({ type: 'int', nullable: false })
  guest_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  room_name_host: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  room_name_guest: string;

  @Column({ type: 'timestamp', nullable: true })
  expires_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.hostedChatRooms)
  host: User;

  @ManyToOne(() => User, (user) => user.joinedChatRooms)
  guest: User;

  @OneToMany(() => ChatLog, (chatLog) => chatLog.chatRoom)
  chatLogs: ChatLog[];
}
