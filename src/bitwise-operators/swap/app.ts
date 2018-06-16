// tslint:disable: no-bitwise

let value1: number = 1;
let value2: number = 2;

value1 = value1 ^ value2;
value2 = value1 ^ value2;
value1 = value1 ^ value2;

console.log(`${value1} ${value2}`);
