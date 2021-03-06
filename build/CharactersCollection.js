"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
// import { Sortable } from './Sorter';
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const charsArr = this.data.split('');
        const temp = charsArr[leftIdx];
        charsArr[leftIdx] = charsArr[rightIdx];
        charsArr[rightIdx] = temp;
        this.data = charsArr.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
