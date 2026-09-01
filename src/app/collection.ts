export class Collection<T> {
  private items: T[];
  constructor(initialElements: T[]) {
    this.items = initialElements;
  }

  getAll(): T[] {
    return this.items;
  }

  getItem(number: number): T {
    return this.items[number];
  }

  clear(): void {
    this.items = [];
  }

  remove(number: number): void {
    this.items = this.items.filter((item: T, index: number) => {
      return index !== number;
    });
  }

  replace(number: number, newElement: T): void {
    this.items = this.items.map((item: T, index: number) => {
      if (index === number) {
        return newElement;
      } else {
        return item;
      }
    });
  }
}

const stringCollection: Collection<string> = new Collection<string>([
  'cucumber', 'tomato', 'apple', 'banana', 'orange']);

const numberCollection: Collection<number> = new Collection<number>([
  1, 2, 3, 4, 5]);

