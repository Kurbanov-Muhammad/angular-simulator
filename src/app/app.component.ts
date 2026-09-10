import { Component } from '@angular/core';
import './training';
import './collection';
import { IProgram } from './interfaces/IProgram';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
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

  programs: IProgram[] = [
    {
      id: 1,
      icon: './images/people_icon.svg',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: './images/shield_icon.svg',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
    },
    {
      id: 3,
      icon: './images/tag_icon.svg',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
    },
  ];

  offerImages: string[] = [
    './images/coffee.png',
    './images/men.png',
    './images/moto.png',
    './images/valley.png',
  ];

  constructor() {
    localStorage.setItem('lastVisit', new Date().toString());
    const visitCount: string | null = localStorage.getItem('visitCount');
    const count: number = Number(visitCount) || 0;
    localStorage.setItem('visitCount', (count + 1).toString());
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

  incrementClicks(): void {
    this.clickCount++;
  }

  decrementClicks(): void {
    if (this.clickCount > 0) {
      this.clickCount--;
    }
  }

  toggleView(): void {
    this.showClock = !this.showClock;
  }

}
