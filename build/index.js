"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from './Sorter';
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([5, 2, 11, -2]);
// let sorter = new Sorter(numbersCollection);
// sorter.bubbleSort();
// console.log(sorter.collection);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('ZdFrQIi');
// sorter = new Sorter(charactersCollection);
// sorter.bubbleSort();
// console.log(charactersCollection);
charactersCollection.bubbleSort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(237);
linkedList.add(-60);
// sorter = new Sorter(linkedList);
// sorter.bubbleSort();
linkedList.bubbleSort();
linkedList.print();
/* while the above commented code works, it is possible to refactor
sorter to make it available as a method on all of the disparate classes,
by taking advantage of classical inheritance/abstract classes */
