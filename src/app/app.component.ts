import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import './collection';
import { IService } from '../app/interfaces/IService';
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
  hoveredImageId: number | null = null;
  selectedLocation: string = '';
  selectedDate: string = '';
  participantsCount: string = '';
  liveInputValue: string = '';
  currentTime: string = '';
  clickCount: number = 0;
  showClock: boolean = true;
  isLoading: boolean = true;

  services: IService[] = [
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

  private isPrimaryColor(color: Color): boolean {
    return color === Color.RED_COLOR || color === Color.BLUE_COLOR || color === Color.GREEN_COLOR;
  }

  private saveLastVisitDate(): void {
    localStorage.setItem('lastVisit', new Date().toString());
  }

  constructor() {
    this.saveLastVisitDate();
    this.incrementVisitCount();
    this.startClock();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  private incrementVisitCount(): void {
    const visitCount: string | null = localStorage.getItem('visitCount');
    const count: number = Number(visitCount) || 0;
    localStorage.setItem('visitCount', (count + 1).toString());
  }

  isFormInvalid(): boolean {
    return (
      this.selectedLocation === '' || this.selectedDate === '' || this.participantsCount === ''
    );
  }

  private startClock(): void {
    setInterval(() => {
      this.currentTime = new Date().toString();
    }, 1000);
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
