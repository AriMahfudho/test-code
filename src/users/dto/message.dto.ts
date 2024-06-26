import { IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  @IsString()
  senderId: string;

  @IsNotEmpty()
  @IsString()
  receiverId: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
