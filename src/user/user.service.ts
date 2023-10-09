import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  //MUTATION
  async create(payload: CreateUserInput) {
    // console.log('payload==>', payload);
    return await this.prisma.user.create({
      data: payload,
    });
  }

  async update(id: string, payload: UpdateUserInput) {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  //QUERY
  async findAll() {
    return await this.prisma.user.findMany({});
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) throw new ForbiddenException('User not found.');

    return user;
  }
}
