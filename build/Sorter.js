"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // collection: number[] | string;
    function Sorter(collection /* number[] | string */) {
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
    };
    return Sorter;
}());
exports.Sorter = Sorter;
