import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {
  @Field()
  title: string;

  @Field()
  description: string;
}
