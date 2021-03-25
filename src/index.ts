import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([5, 2, 11, -2]);
const sorter = new Sorter(numbersCollection)
sorter.bubbleSort();
console.log(sorter.collection);
