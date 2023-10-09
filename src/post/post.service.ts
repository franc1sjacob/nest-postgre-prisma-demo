import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CreatePostInput) {
    return await this.prisma.post.create({
      data: payload,
    });
  }

  async update(id: string, payload: UpdatePostInput) {
    return await this.prisma.post.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
      },
    });
  }

  async findAll() {
    return await this.prisma.post.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.post.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
}
