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

  async findAll() {
    return await this.prisma.post.findMany({});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  // update(id: number, updatePostInput: UpdatePostInput) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}