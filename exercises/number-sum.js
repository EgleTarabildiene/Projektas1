/*
Sukaiciuotikaiciu suma intervale (imtinai)
pvz. : 0..4 atsakymas 10, nes -> 0 + 1 + 2 + 3 + 4 = 10


*/
let sum = 0;

for (let i = 0; i <= 4; i++) {
    sum += i;
    console.log(i, sum);
}

console.log('SUM:', sum);

console.clear()

const min = 12;
const max = 15;
let total = 0;


for (let i = min; i <= max; i++) {
    total += i;
}

console.log('total:', total);



function sumBetween(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;

}

//netinka toks uzdavinio sprendimo metodas. kitoki sugalvot

//return `Sum between ${min} and ${max} is ${total}.`;

// Sum between 0 and 4 is 10;
console.log(sumBetween(0, 4));
console.log(sumBetween(0, 10));
console.log(sumBetween(13, 15));
console.log(sumBetween(0, 100));
console.log(sumBetween(0, 100));

console.log(sumBetween(0, 1000));
console.log(sumBetween(0, 10_000));
console.log(sumBetween(0, 100_0000));
console.log(sumBetween(0, 1000_000));
console.log(sumBetween(0, 10_000_000));
console.log(sumBetween(0, 100_000_000));
console.log(sumBetween(0, 10_000_000_000));
console.clear();
//// 0000 -> 2**4 = 16++
console.log('----------');
function correctBetween(max) {
    return (max * (max + 1)) / 2;
}

console.log(correctBetween(13, 15));
console.log(correctBetween(10));
console.log(correctBetween(100));
console.log(correctBetween(100));
console.log(correctBetween(100));    //namu darbas
console.log(correctBetween(1000));
console.log(correctBetween(10_000));
console.log(correctBetween(100_000));
console.log(correctBetween(1000_000));
console.log(correctBetween(100_000_000));
console.log(correctBetween(1000_000_000));

console.log('--------');

//function combiBetween(min, max) {
//    total = (min * (max + 1)) / 2; {
//
//    }
//    return total
//
//}
//
//console.log(combiBetween(0, 0));
//console.log(combiBetween(0, 4));
//console.log(correctBetween(0, 100));
//console.log(correctBetween(574, 815));
//console.log(correctBetween(-50, 50));
//console.log(correctBetween(-70, 30));
//console.log(correctBetween(5, 100_000));
//console.log(correctBetween(5, 1000_000));
//console.log(correctBetween(5, 100_000_000));
//console.log(correctBetween(5, 1000_000_000));




function sumBetween2(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;

}


console.log('total:', total);
console.log(sumBetween2(1, 9));
console.log(sumBetween2(3, 7));
console.log(sumBetween2(14, 19));
console.log(sumBetween2(4, 9));



function sumBetween3(min, max) {
    if ((min + max) == 10) {
        return (min * 2 + max * 2)
    }
    let tat = 0;
    let x =
        ('min').length;
    x -= 1;
    tat = (min + max) * x; {

    } return tat
}
console.log('total:');

console.log('total:', total);
console.log(sumBetween3(2, 5));
console.log(sumBetween3(5, 12));
console.log(sumBetween3(14, 19));
console.log(sumBetween3(4, 9));