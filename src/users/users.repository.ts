import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUsers() {
    const users = await this.userRepository.createQueryBuilder().getMany();

    return users;
  }

  async createUser(createUserDto: CreateUserDto) {
    const { email, password, nickname, name } = createUserDto;

    const user = new User();
    user.email = email;
    user.password = password;
    user.nickname = nickname;
    user.name = name;

    const newUser = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();

    return newUser;
  }
}
