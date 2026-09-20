import { Injectable } from '@angular/core';
import { MessageType } from '../../enums/message-type';
import { IMessage } from '../interfaces/IMessage';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: IMessage[] = [];

  get allMessages(): IMessage[] {
    return this.messages;
  }

  addMessage(text: string, type: MessageType) {
    const newId = Date.now();
    const newMessage: IMessage = {
      id: newId,
      text: text,
      type: type,
    };
    this.messages.unshift(newMessage);
    setTimeout(() => {
      this.closeMessage(newId)
    }, 5000);
  }
  closeMessage(id: number) {
    this.messages = this.messages.filter((msg) => msg.id !== id);
  }
}

