import { DOCUMENT, Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorMode } from '../../enums/ColorMode';
import { Theme } from '../../enums/Theme';
import { StorageService } from '../services/storage.service';
import { PrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import Aura from '@primeuix/themes/aura';

export interface ThemeState {
  theme: Theme;
  colorMode: ColorMode;
}

const DEFAULT_THEME_STATE: ThemeState = {
  theme: Theme.AURA,
  colorMode: ColorMode.LIGHT,
};
const THEME_STATE_STORAGE_KEY: string = 'theme-state';
const THEME_PRESETS: Record<Theme, typeof Aura> = {
  [Theme.AURA]: Aura,
  [Theme.NORA]: Nora,
  [Theme.LARA]: Lara,
};

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private primeng: PrimeNG = inject(PrimeNG);
  private document: Document = inject(DOCUMENT);
  private themeStorage: StorageService = inject(StorageService);
  private themeStateSubject: BehaviorSubject<ThemeState> = new BehaviorSubject<ThemeState>(
    this.getStoredThemeState(),
  );
  themeState$: Observable<ThemeState> = this.themeStateSubject.asObservable();

  constructor() {
    this.themeState$.subscribe((state: ThemeState) => {
      this.document.documentElement.setAttribute('data-theme', state.theme);
      this.document.documentElement.setAttribute('data-color-mode', state.colorMode);
      this.primeng.theme.set({
        preset: THEME_PRESETS[state.theme],
        options: { darkModeSelector: '[data-color-mode="dark"]' },
      });
    });
  }

  private getStoredThemeState(): ThemeState {
    try {
      const storedState: ThemeState | null = this.themeStorage.getItem<ThemeState | null>(
        THEME_STATE_STORAGE_KEY,
      );
      if (!storedState) {
        return DEFAULT_THEME_STATE;
      }
      const isThemeValid: boolean = Object.values(Theme).includes(storedState.theme);
      const isColorModeValid: boolean = Object.values(ColorMode).includes(storedState.colorMode);
      if (!isThemeValid || !isColorModeValid) {
        return DEFAULT_THEME_STATE;
      }
      return storedState;
    } catch {
      return DEFAULT_THEME_STATE;
    }
  }

  private updateThemeState(newState: ThemeState): void {
    this.themeStateSubject.next(newState);
    this.themeStorage.setItem<ThemeState>(THEME_STATE_STORAGE_KEY, newState);
  }

  setTheme(theme: Theme): void {
    const currentState: ThemeState = this.themeStateSubject.getValue();
    const newState: ThemeState = { ...currentState, theme: theme };
    this.updateThemeState(newState);
  }

  setColorMode(colorMode: ColorMode): void {
    const currentState: ThemeState = this.themeStateSubject.getValue();
    const newState: ThemeState = { ...currentState, colorMode: colorMode };
    this.updateThemeState(newState);
  }

  toggleColorMode(): void {
    const currentState: ThemeState = this.themeStateSubject.getValue();
    const nextColorMode: ColorMode =
      currentState.colorMode === ColorMode.DARK ? ColorMode.LIGHT : ColorMode.DARK;
    this.setColorMode(nextColorMode);
  }

}
