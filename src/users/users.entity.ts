import { ChatLog } from 'src/chats/chatLogs.entity';
import { ChatRoom } from 'src/chats/chatRooms.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nickname: string;

  @Column({ type: 'longtext', nullable: true })
  token: string;

  @Column({ type: 'timestamp', nullable: true })
  last_login_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_logout_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  // Relationship Declaration
  @OneToMany(() => ChatRoom, (chatRoom) => chatRoom.host)
  hostedChatRooms: ChatRoom[];

  @OneToMany(() => ChatRoom, (chatRoom) => chatRoom.guest)
  joinedChatRooms: ChatRoom[];

  @OneToMany(() => ChatLog, (chatLog) => chatLog.sender)
  sentChats: ChatLog[];
}
