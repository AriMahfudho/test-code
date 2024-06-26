import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async sendMessage(createMessageDto: { sender: string; recipient: string; content: string }): Promise<Message> {
    const newMessage = new this.messageModel(createMessageDto);
    return newMessage.save();
  }

  async viewMessage(id: string): Promise<Message> {
    return this.messageModel.findById(id).exec();
  }

  async getMessagesForRecipient(recipient: string): Promise<Message[]> {
    return this.messageModel.find({ recipient }).exec();
  }
}
