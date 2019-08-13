// TIPADO
// - EXPLICITO
let lucky: number;

lucky = 10;
// lucky = '23';
// - INPLICITO
let note = 20;
// let note = '50';

// SIN TIPADO 
function pow(x: any, y: any) {
 return Math.pow(x, y);
}

pow('e', '40');

// TIPADO EN ARRAYS
// type List = [number, string, boolean];
const arr = [];
// const arr: number[] = [];
// const arr: List = [];
arr.push(1);
arr.push('TEXTO');
arr.push(false);

// GENERICS 
class Observable<T> {
    constructor(public value: T){}
}

let x: Observable<number>;

let y: Observable<string>;

let z = new Observable('SOL');