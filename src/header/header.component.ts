import { Component } from '@angular/core';
import { INavLink } from '../app/interfaces/INavLink';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  currentTime: string = '';
  clickCount: number = 0;
  showClock: boolean = true;

  navLinks: INavLink[] = [
    {
      id: 1,
      name: 'Главная',
      link: '/',
    },
    {
      id: 2,
      name: 'Пользователи',
      link: '/users',
    },
  ];

  constructor() {
    setInterval(() => {
      this.currentTime = new Date().toString();
    }, 1000);
  }

}
