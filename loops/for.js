'use strict';
/*
FOR - ciklas (pagrindinis)
*/

let a = 0;

a += 2;
a += 2;
a += 2;
a += 2;
console.log(a);


console.log('START');

for (let c = -5; c < 10; c += 2) {
    console.log(c);
}


console.log('END');



// 0 1 2 3 4 5 < 6

const marks = [10, 2, 8, 4, 6, 10];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    console.log(i, marks[i], '---', sum);
}

console.log('SUM:', sum, sum / marks.length);


console.clear();

function arTestiCikla(index) {
    if (index < 5) {
        return true;
    }
    return false;
}

let k = 0;
let i = 0;

for (; arTestiCikla(i);) {
    console.log(i, k++);
    i++;
}


//k=0; i=0; i+k = 2<5=true -> 0
//k=0; i=0; i+k = 3<5=true -> 1
//k=0; i=0; i+k = 4<5=true -> 2
//k=0; i=0; i+k = 5<5=true -> false


for (let i = 4; i < 0; i--) {
    console.log(i);
}

console.log('-------');

for (let i = 0; i < 5; i++) {
    console.log(4 - i);
}