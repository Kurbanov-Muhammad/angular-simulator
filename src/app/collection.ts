export class Collection<T> {
  #items: T[];
  constructor(initialElements: T[]) {
    this.#items = initialElements;
  }

  getAll(): T[] {
    return this.#items;
  }

  getItem(number: number): T {
    return this.#items[number];
  }

  clear(): void {
    this.#items = [];
  }

  remove(number: number): void {
    this.#items = this.#items.filter((item, index) => {
      return index !== number;
    });
  }

  replace(number: number, newElement: T): void {
    this.#items = this.#items.map((item, index) => {
      if (index === number) {
        return newElement;
      } else {
        return item;
      }
    });
  }
}

const stringCollection = new Collection<string>([
  'cucumber', 'tomato', 'apple', 'banana', 'orange']);

const numberCollection = new Collection<number>([
  1, 2, 3, 4, 5]);

