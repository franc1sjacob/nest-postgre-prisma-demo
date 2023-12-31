import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') payload: CreatePostInput) {
    return this.postService.create(payload);
  }

  @Query(() => [Post], { name: 'findAllPost' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'findOnePost' })
  findOne(@Args('id') id: string) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(
    @Args('id') id: string,
    @Args('updatePostInput') payload: UpdatePostInput,
  ) {
    return this.postService.update(id, payload);
  }

  @Mutation(() => Post)
  removePost(@Args('id') id: string) {
    return this.postService.remove(id);
  }
}
