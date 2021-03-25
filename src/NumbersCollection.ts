// import { Sortable } from './Sorter'
import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  /* create a 'getter' to access length as usual instead of as method */
  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    const temp = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = temp;
  }
}
