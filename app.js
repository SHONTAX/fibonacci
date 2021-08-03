'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n){
    if (memo.has(n)){ // n=3
        return memo.get(n);
    } //           fib(2) + fib(1) => fib(1) fib(0) + fib(1) => 1 + 0 + 1
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}