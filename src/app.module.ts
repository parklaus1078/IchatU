import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from './utils/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
