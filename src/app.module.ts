import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import dataSource from './utils/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource)],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
