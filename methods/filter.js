const marks = [10, 2, 8, 4, 6];
const badMarkLimit = 5;

console.log('------------------------------geri pazymiai');
//kokie gauti geri pazymiai?
const goodMarks = marks.filter(n => n > badMarkLimit);
// kiek gauta geru pazymiu?
const kiekis = goodMarks.length;
console.log(goodMarks, kiekis);

const goodMarks2 = [];

for (const n of marks) {
    if (n > badMarkLimit) {
        goodMarks2.push(n);
    }
}
console.log(goodMarks2);

console.log('---------------blogi pazymiai');

//kokie gauti blogi pazymiai?

const badMarks = marks.filter(n => n < badMarkLimit);
const kiekisBlogu = badMarks.length;
console.log(badMarks);

// kiek gauta blogu pazymiu?
console.log(badMarks.length);

// koks didziausias blogas pazymys?
console.log('--------didziausias blogas pazymys');

const biggestBad = badMarks.sort((a, b) => a - b).reverse()[0];
console.log(biggestBad);

function bigBad(badMarks) {
    let small = badMarks[0];

    for (let i = 1; i < badMarks.length; i++) {
        if (badMarks[i] > small)
            small = badMarks[i];
    }
    return small;
}
console.log("Didziausias blogas pazymys " + bigBad(badMarks));


// koks maziausias geras pazymys?   
console.log('-----------------maziausias geras pazymys')
const lowestGood = goodMarks.sort((a, b) => a + b).reverse()[0];
console.log(lowestGood);

function smallGood(goodMarks) {
    let max = goodMarks[0];

    for (let i = 1; i < goodMarks.length; i++) {
        if (goodMarks[i] < max)
            max = goodMarks[i];
    }
    return max;
}
console.log("maziausias geras pazymys " + smallGood(goodMarks));

console.log('-------------lyginiai nelyginiai--');

const numbers = [1, 5, 7, -8, 6, -10, -13];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(n => n % 2 === 1);
console.log(oddNumbers);

console.log('-----------------');
const randomNumbers = [1, 5, 7.77, -8, 6.66, -10, 13.14];

const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
const floatNumbers = randomNumbers.filter(n => n % 1 !== 0);

console.log(integerNumbers);
console.log(floatNumbers);

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

const marriedStudents = students.filter(s => s.isMarried);
console.log(marriedStudents);

const notmarriedStudents = students.filter(s => !s.isMarried);
console.log(marriedStudents);


console.log('-------pensininko amzius daugiau uz 70');
const pensininkai = students.filter(student => student.age >= 70);
console.log(pensininkai);


