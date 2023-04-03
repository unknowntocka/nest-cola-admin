import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepositry.save(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.userRepositry.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepositry.findOneBy({ id });
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const a = await this.userRepositry.update(id, updateUserDto);
    console.log(a);
    const user = await this.userRepositry.findOneBy({ id });
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async remove(id: number) {
    const a = await this.userRepositry.delete(id);
    console.log(a);
  }
}
