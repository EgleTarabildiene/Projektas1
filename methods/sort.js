const abc = ['a', 'c', 'b', 'z', 'f', 's'];

abc.sort().reverse();
console.log(abc);

const marks = [10, 2, 8, 22, 30, 4, 6, 0];
marks.sort((a, b) => b - a);

console.log(marks);

const students = [
    { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: 'Maryte', age: 88, isMarried: false, marks: [7, 7, 7] },
    { name: 'Petras', age: 77, isMarried: false, marks: [7, 6, 5, 4, 3] },
    { name: 'Ona', age: 66, isMarried: true, marks: [1] },
];

//students.sort((a, b) => a.name - b.name);
//console.log(students);
//
console.log('----------------------------Namu darbai--');
//students.sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);
//console.log(students);

/*
1.Reikia apskaiciuoti kiekvieno studento pazymiu kieki
 ir tai prideti kaip nauja studento objekto rakta (marksCount).
*/
for (const student of students) {
    student.marksCount = student.marks.lenght;
}


/*
2.Reikia apskaiciuoti kiekvieno studento pazymiu vidurki 
 ir tai prideti kaip nauja studento objekto rakta (marksAverage).
*/

for (const student of students) {
    let sum = 0;

    for (const mark of student.marks) {
        sum += mark;
    }

    student.marksAverage = sum / student.marks.length;
}


/*
3.Reikia rasti kiekvieno studento maziausia pazymi 
 ir tai prideti kaip nauja studento objekto rakta (minMark).
*/

for (const student of students) {
    const marksCopy = [];
    for (const mark of student.marks) {
        marksCopy.push(mark);
    }

    marksCopy.sort((a, b) => a - b);
    student.minMark = marksCopy[0];
}

/*
4.Reikia rasti kiekvieno studento didziausia pazymi 
 ir tai prideti kaip nauja studento objekto rakta (maxMark).
*/

for (const student of students) {
    student.maxMark = Math.max(...student.marks);
}
console.log('-----------------------Studentu sarasas--');

console.log(students);
/*
5.Reikia sudaryti studentu sarasa (pilni objektai), 
 kuriu pazymiu vidurkis yra didesnis uz 5.
*/
console.log('-----------vidurkis daugiau uz 5-');
const bigUz5 = students.filter(student => student.marksAverage > 5);

console.log(bigUz5);


/*
6.Reikia sudaryti studentu vardu sarasa, 
 kuriu pazymiu vidurkis yra mazesnis uz 5.
*/

console.log('-----------vidurkis maziau uz 5-------');
const smallUz5 = students.filter(student => student.marksAverage < 5);

console.log(smallUz5);








