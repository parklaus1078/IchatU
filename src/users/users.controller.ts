import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { HttpExceptionFilter } from 'src/utils/http-exception/http-exception.filter';
import { CreateUserDto } from './users.dto';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const users = await this.usersService.findUsers();

    return res.status(HttpStatus.OK).json({ results: users });
  }

  @Post()
  async createUser(
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
  ): Promise<Response> {
    const newUser = await this.usersService.createUsers(createUserDto);

    return res.status(HttpStatus.CREATED).json({ result: newUser });
  }
}
