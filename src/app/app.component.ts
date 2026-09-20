import { Component } from '@angular/core';
import './training';
import './collection';
import { IProgram } from './interfaces/IProgram';
import { FormsModule } from '@angular/forms';
import { IBlog } from './interfaces/IBlog';
import { MessageType } from '../enums/message-type';
import { MessageService } from './services/message.service';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgTemplateOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companySlogan: string = 'Насладись прогулкой в горах';
  continuationSlogan: string = 'с командой единомышленников';
  selectedLocation: string = '';
  selectedDate: string = '';
  participantsCount: string = '';
  liveInputValue: string = '';
  currentTime: string = '';
  clickCount: number = 0;
  showClock: boolean = true;
  isLoading: boolean = true;
  hoveredImageIndex: number | null = null;
  MessageType = MessageType;

  programs: IProgram[] = [
    {
      id: 1,
      icon: 'people',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: 'shield',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
    },
    {
      id: 3,
      icon: 'tag',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
    },
  ];

  blogs: IBlog[] = [
    {
      id: 1,
      icon: 'italia',
      title: 'Красивая Италя, какая она в реальности?',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      button: 'читать статью',
    },
    {
      id: 2,
      icon: 'fly',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      button: 'читать статью',
    },
    {
      id: 3,
      icon: 'street',
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      button: 'читать статью',
    },
    {
      id: 4,
      icon: 'india',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023',
      button: 'читать статью',
    },
  ];

  offerImages: string[] = ['coffee', 'men', 'moto', 'valley'];
  priceCard: string[] = ['lake', 'starry_sky', 'stone'];

  constructor(public messageService: MessageService, private storageService: StorageService) {
    this.storageService.setItem('lastVisit', new Date());
    const visitCount: number = this.storageService.getItem<number>('visitCount');
    const count: number = Number(visitCount) || 0;
    this.storageService.setItem('visitCount', count + 1);
    setInterval(() => {
      this.currentTime = new Date().toString();
    }, 1000);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  isFormInvalid(): boolean {
    return (
      this.selectedLocation === '' || this.selectedDate === '' || this.participantsCount === ''
    );
  }

  showMessage(type: MessageType): void {
    this.messageService.addMessage('Message Content', type);
  }

}
