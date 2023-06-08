import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChatRoom } from './chatRooms.entity';

@Entity({ name: 'ChatLogs' })
export class ChatLog {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'int', nullable: false })
  chatroom_id: number;

  @Column({ type: 'int', nullable: false })
  sender_id: number;

  @Column({ type: 'longtext', nullable: false })
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.sentChats, { onDelete: 'CASCADE' })
  sender: User;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.chatLogs)
  chatRoom: ChatRoom;
}
