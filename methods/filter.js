const marks = [10, 2, 8, 4, 6];
const badMarkLimit = 5;

//kokie gauti geri pazymiai?
const goodMarks = marks.filter(n => n > badMarkLimit);
console.log(goodMarks);

const goodMarks2 = [];

for (const n of marks) {
    if (n > badMarkLimit) {
        goodMarks2.push(n);
    }
}
console.log(goodMarks2);


//kokie gauti blogi pazymiai?

const badMarks = marks.filter(n => n > badMarkLimit);
console.log(goodMarks);


//kiek gauta geru pazymiu?
//kkiek gauta blogu pazymiu?
//koks didziausias blogas pazymys?
//koks maziausias geras pazymys?     namu darbas!!!!!!!!!


const numbers = [1, 5, 7, -8, 6, -10, -13];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(n => n % 2 === 1);
console.log(oddNumbers);


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

const pensininkai = students.filter(student => student.age >= 70);
console.log(pensininkai);


