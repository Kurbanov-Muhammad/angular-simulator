import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import './collection';

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
    return color === Color.redColor || color === Color.blueColor || color === Color.greenColor;
  }

  saveLastVisitDate(): void {
    localStorage.setItem('lastVisit', new Date().toString());
  }

  constructor() {
    this.saveLastVisitDate();
    this.incrementVisitCount();
  }

  incrementVisitCount(): void {
    const visitCount = localStorage.getItem('visitCount');
    const count = Number(visitCount) || 0;
    localStorage.setItem('visitCount', (count + 1).toString());
  }
}


