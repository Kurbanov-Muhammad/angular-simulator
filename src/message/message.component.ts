import { Component, inject } from '@angular/core';
import { MessageService } from '../app/services/message.service';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  messageService: MessageService = inject(MessageService);
}
