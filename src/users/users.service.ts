import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/users.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(filter: {
    where: { id?: string; email?: string; username?: string };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const user = new User();
    const existByUsername = await this.findOne({
      where: { username: createUserDto.username },
    });
    const existByEmail = await this.findOne({
      where: { email: createUserDto.email },
    });

    if (existByUsername) {
      return { warningMessage: 'Пользователь с таким именем уже существует' };
    }
    if (existByEmail) {
      return { warningMessage: 'Пользователь с такой почтой уже существует' };
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    user.email = createUserDto.email;
    user.password = hashPassword;
    user.username = createUserDto.username;

    return user.save();
  }
}
