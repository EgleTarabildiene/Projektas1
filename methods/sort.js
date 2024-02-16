const abc = ['a', 'c', 'b', 'z', 'f', 's'];

abc.sort().reverse();
console.log(abc);

const marks = [10, 2, 8, 22, 30, 4, 6, 0];
marks.sort((a, b) => b - a);

console.log(marks);

const students = [
    { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: 'Maryte', age: 88, isMarried: false, marks: },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

students.sort((a, b) => a.name === b.name ? 0 : (a.name < ));
console.log(students);

/*
1.Reikia apskaiciuoti kiekvieno studento pazymiu kieki
 ir tai prideti kaip nauja studento objekto rakta (marksCount).

2.Reikia apskaiciuoti kiekvieno studento pazymiu vidurki 
 ir tai prideti kaip nauja studento objekto rakta (marksAverage).

3.Reikia rasti kiekvieno studento maziausia pazymi 
 ir tai prideti kaip nauja studento objekto rakta (minMark).

4.Reikia rasti kiekvieno studento didziausia pazymi 
 ir tai prideti kaip nauja studento objekto rakta (maxMark).

5.Reikia sudaryti studentu sarasa (pilni objektai), 
 kuriu pazymiu vidurkis yra didesnis uz 5.

6.Reikia sudaryti studentu vardu sarasa, 
 kuriu pazymiu vidurkis yra didesnis uz 5.
*/