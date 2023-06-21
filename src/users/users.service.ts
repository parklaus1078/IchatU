import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findUsers() {
    return this.usersRepository.findUsers();
  }

  async createUsers(createUserDto: CreateUserDto) {
    const { password } = createUserDto;

    if (!this.validatePasswod(password)) {
      throw new BadRequestException();
    }

    const hashedPassword = await this.encryptPassword(password);
    createUserDto.password = hashedPassword;

    return this.usersRepository.createUser(createUserDto);
  }

  private validatePasswod(password: string): boolean {
    const containsWhitespace = /\s/.test(password);
    const containsSpeicalCharacters = /[!@#$%^&*()_+-=[\]{};':"\\,.<>]/.test(
      password,
    );
    const containsCapitalLetter = /[A-Z]/.test(password);

    return (
      !containsWhitespace && containsCapitalLetter && containsSpeicalCharacters
    );
  }

  private async encryptPassword(password: string): Promise<string> {
    const saltRounds = parseInt(process.env.SALT_ROUND);
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  }
}
