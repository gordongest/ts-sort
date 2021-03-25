import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([5, 2, 11, -2]);
let sorter = new Sorter(numbersCollection);
sorter.bubbleSort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollection('ZdFrQIi');
sorter = new Sorter(charactersCollection);
sorter.bubbleSort();
console.log(charactersCollection);
