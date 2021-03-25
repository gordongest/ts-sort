"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter([4, 3, 10, -1]);
sorter.bubbleSort();
console.log(sorter.collection);
