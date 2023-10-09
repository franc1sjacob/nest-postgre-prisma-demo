import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') payload: CreateUserInput) {
    return this.userService.create(payload);
  }

  @Query(() => [User], { name: 'findAllUser' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'findOneUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') payload: UpdateUserInput,
    @Args('id') id: number,
  ) {
    return this.userService.update(id, payload);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
