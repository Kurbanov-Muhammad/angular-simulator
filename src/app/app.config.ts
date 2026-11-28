import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loginInterceptor } from './interceptors/login.interceptor';
import { errorInterceptor } from '../error.interceptor';

export const appConfig: ApplicationConfig = {

  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: '[data-color-mode="dark"]' },
      },
    }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptors([loginInterceptor, errorInterceptor])),
  ],

};
