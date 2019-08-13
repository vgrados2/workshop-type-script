"use strict";
// TIPADO
// - EXPLICITO
var lucky;
lucky = 10;
// lucky = '23';
// - INPLICITO
var note = 20;
// let note = '50';
// SIN TIPADO 
function pow(x, y) {
    return Math.pow(x, y);
}
pow('e', '40');
// TIPADO EN ARRAYS
// type List = [number, string, boolean];
var arr = [];
// const arr: number[] = [];
// const arr: List = [];
arr.push(1);
arr.push('TEXTO');
arr.push(false);
// GENERICS 
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
var y;
var z = new Observable('SOL');
//# sourceMappingURL=ejemplo1.js.map