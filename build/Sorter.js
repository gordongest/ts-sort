"use strict";
// /* create an interface to ensure conformity */
// export interface Sortable {
//   length: number;
//   compare(leftIdx: number, rightIdx: number): boolean;
//   swap(leftIdx: number, rightIdx: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
/*
ABSTRACT CLASSES
- cannot be used to create a class directly
- can ONLY be used as a parent class
- can contain real implementations for methods not in the abstract class
- implementations of abstract methods must have names/types
- can make child classes 'promise' to implement abstract methods
*/
class Sorter {
    /* class methods */
    bubbleSort() {
        // const { length } = this.collection;
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                /* refactoring to use as super class */
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                // /* this implementation only relies on the interface, so it is re-usable */
                // if (this.collection.compare(j, j + 1)) {
                //   this.collection.swap(j, j + 1);
                // }
                /*
                the below implementation is not ideal because it would require refactoring
                for every different type of value in order to support sorting them
                */
                // /* if collection is an array of numbers */
                // if (this.collection instanceof Array) { /* type guard! 'instanceof' used for non-primitives */
                //   if (this.collection[j] > this.collection[j + 1]) {
                //     let temp: number = this.collection[j];
                //     this.collection[j] = this.collection[j + 1];
                //     this.collection[j + 1] = temp;
                //   }
                // }
                // /* if collection is a string */
                // if(typeof this.collection === 'string') { /* type guard! 'typeof' used for primitives */
                //   if( /* some logic... */ ){
                //     /* some more logic... */
                //   }
                // }
                // /* but we can't add another type/structure */
                // if(this.collection instanceof LinkedList) {
                // }
            }
        }
    }
}
exports.Sorter = Sorter;
