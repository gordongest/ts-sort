import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const charsArr = this.data.split('');

    const temp = charsArr[leftIdx];
    charsArr[leftIdx] = charsArr[rightIdx];
    charsArr[rightIdx] = temp;
    
    this.data = charsArr.join('');
  }
}
