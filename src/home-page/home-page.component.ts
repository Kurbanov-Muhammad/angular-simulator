import { Component, inject } from '@angular/core';
import { IProgram } from '../app/interfaces/IProgram';
import { IBlog } from '../app/interfaces/IBlog';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../app/services/message.service';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  messageService: MessageService = inject(MessageService);

  companySlogan: string = 'Насладись прогулкой в горах';
  continuationSlogan: string = 'с командой единомышленников';

  selectedLocation: string = '';
  selectedDate: string = '';
  participantsCount: string = '';
  liveInputValue: string = '';
  hoveredImageIndex: number | null = null;

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
      title: 'Красивая Италия, какая она в реальности?',
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
      title: 'Как подготовиться к путешествию в одиночку?',
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
  pinterestFoto: string[] = ['balloons', 'map', 'hotel', 'beach', 'canyon', 'camera'];

  isFormInvalid(): boolean {
    return (
      this.selectedLocation === '' || this.selectedDate === '' || this.participantsCount === ''
    );
  }

}
