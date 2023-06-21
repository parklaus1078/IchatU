import { User } from 'src/users/users.entity';
import { DataSource, Entity } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ChatRoom } from 'src/chats/chatRooms.entity';
import { ChatLog } from 'src/chats/chatLogs.entity';
import { configDotenv } from 'dotenv';

configDotenv();

const type = process.env.DB_MYSQL_CONNECTION;
const port = process.env.DB_MYSQL_PORT;
const username = process.env.DB_MYSQL_USERNAME;
const password = process.env.DB_MYSQL_PASSWORD;
const host = process.env.DB_MYSQL_HOST;
const prefix = process.env.DB_MYSQL_PREFIX;
const postfix = process.env.DB_MYSQL_POSTFIX;

// <============== Connection Acquired without @nest/typeorm ==============>

const mysqlConnectionOpt: MysqlConnectionOptions = {
  type: 'mysql',
  port: parseInt(port),
  host: host,
  username: username,
  password: password,
  database: prefix + '_' + postfix,
  entities: [User, ChatRoom, ChatLog],
  synchronize: true, // should be disabled in production environment
};

export const dataSource: DataSource = new DataSource(mysqlConnectionOpt);

// <=============== Connection Acquired with @nest/typeorm ================>

export const typeOrmModuleOpt: TypeOrmModuleOptions = {
  type: 'mysql',
  port: parseInt(port),
  host: host,
  username: username,
  password: password,
  database: prefix + '_' + postfix,
  entities: [User, ChatRoom, ChatLog],
  synchronize: true, // should be disabled in production environment
};
