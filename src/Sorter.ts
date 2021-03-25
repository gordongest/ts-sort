import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  // collection: number[] | string;

  /* equivalent to commented code */
  constructor(public collection: /* number[] | string */ NumbersCollection) {
    // this.collection = collection;
  }

  bubbleSort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }

        /*
      the below implementation is less than ideal because it would require refactoring
      for every different type of value in order to support sorting them
      */

        //     /* if collection is an array of numbers */
        //     if (this.collection instanceof Array) { /* type guard! 'instanceof' used for non-primitives */
        //       if (this.collection[j] > this.collection[j + 1]) {
        //         let temp: number = this.collection[j];
        //         this.collection[j] = this.collection[j + 1];
        //         this.collection[j + 1] = temp;
        //       }
        //     }

        //     /* if collection is a string */
        //     if(typeof this.collection === 'string') { /* type guard! 'typeof' used for primitives */
        //       if( /* some logic... */ ){
        //         /* some more logic... */
        //       }
        //     }

        //     /* but we can't add another type/structure */
        //     if(this.collection instanceof LinkedList) {

        //     }
      }
    }
  }
}
