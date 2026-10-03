import { Component, inject } from '@angular/core';
import { MessageService } from '../app/services/message.service';

@Component({
  selector: 'app-users-page',
  imports: [],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {

  messageService: MessageService = inject(MessageService);

}
