"use strict";
var Sorter = /** @class */ (function () {
    // collection: number[];
    function Sorter(collection) {
        this.collection = collection;
        // this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([4, 3, 10, -1]);
sorter.bubbleSort();
console.log(sorter.collection);
