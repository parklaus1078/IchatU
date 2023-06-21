import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOpt } from './utils/db.config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersRepository } from './users/users.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOpt), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
