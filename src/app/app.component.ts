import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import './collection';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companySlogan: string = 'Насладись прогулкой в горах';
  continuationSlogan: string = 'с командой единомышленников';

  isPrimaryColor(color: Color): boolean {
    return color === Color.RED_COLOR || color === Color.BLUE_COLOR || color === Color.GREEN_COLOR;
  }

  saveLastVisitDate(): void {
    localStorage.setItem('lastVisit', new Date().toString());
  }

  constructor() {
    this.saveLastVisitDate();
    this.incrementVisitCount();
  }

  incrementVisitCount(): void {
    const visitCount: string | null = localStorage.getItem('visitCount');
    const count: number = Number(visitCount) || 0;
    localStorage.setItem('visitCount', (count + 1).toString());
  }
}


