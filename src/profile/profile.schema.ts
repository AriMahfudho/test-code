import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Profile extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  address: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
