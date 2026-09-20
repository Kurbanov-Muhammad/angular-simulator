import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem<T>(key: string): T {
    const rawValue = localStorage.getItem(key);
    return JSON.parse(rawValue ?? 'null')
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}
