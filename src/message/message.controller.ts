import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './message.schema';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async sendMessage(@Body() createMessageDto: { sender: string; recipient: string; content: string }): Promise<Message> {
    return this.messageService.sendMessage(createMessageDto);
  }

  @Get(':id')
  async viewMessage(@Param('id') id: string): Promise<Message> {
    return this.messageService.viewMessage(id);
  }

  @Get('view/:recipient')
  async getMessagesForRecipient(@Param('recipient') recipient: string): Promise<Message[]> {
    return this.messageService.getMessagesForRecipient(recipient);
  }
}
