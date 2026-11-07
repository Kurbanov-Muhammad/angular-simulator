import { Component, inject } from '@angular/core';
import { INavLink } from '../app/interfaces/INavLink';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService, ThemeState } from '../app/services/theme.service';
import { ColorMode } from '../enums/ColorMode';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, AsyncPipe, ToggleSwitchModule, FormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  themeService: ThemeService = inject(ThemeService);
  currentTime: string = '';
  clickCount: number = 0;
  showClock: boolean = true;

  sunIcon: IconDefinition = faSun;
  moonIcon: IconDefinition = faMoon;

  themeState$: Observable<ThemeState> = this.themeService.themeState$;
  colorModes: typeof ColorMode = ColorMode;

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

  onToggleColorMode(): void {
    this.themeService.toggleColorMode();
  }

}
