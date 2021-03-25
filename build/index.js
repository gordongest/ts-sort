"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([5, 2, 11, -2]);
let sorter = new Sorter_1.Sorter(numbersCollection);
sorter.bubbleSort();
console.log(sorter.collection);
const charactersCollection = new CharactersCollection_1.CharactersCollection('ZdFrQIi');
sorter = new Sorter_1.Sorter(charactersCollection);
sorter.bubbleSort();
console.log(charactersCollection);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(237);
linkedList.add(-60);
sorter = new Sorter_1.Sorter(linkedList);
sorter.bubbleSort();
linkedList.print();
/* while the above works, it is possible to refactor sorter
to make it available as a method on all of the disparate classes,
by taking advantage of classical inheritance */
