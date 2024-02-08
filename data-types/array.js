/*
ARRAY - sarasas, masyvas, listas, zodynas, N-mate matrica, arejas

*/
const emty = [];
console.log(emty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

console.log('Emty kiekis', emty.length);
console.log('Pazymiu kiekis', marks.length);
console.log('Studentu kiekis', students.length);

console.log(marks[0], marks[1], marks[2]);
console.log(marks[9999]);
console.log(marks[-1]);
console.log(marks[3.5]);

// Gaunam studento 5 pazymiu masyva. Reikai suskaiciuoti pazymiu vidurki.
// Reikia suskaiciuoti pazymiu vidurki. 

function marksAverage(marks) {
    //validacijos

    //logika

    //const total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4]; arba

    //let total = 0;                     // 0
    //total = total + marks[0];      // = 0 + 10
    //total = total + marks[1];      // = 10 + 2
    //total = total + marks[2];      // = 12 + 8
    //total = total + marks[3];      // = 20 + 4 
    //total = total + marks[4];      // = 24 + 6

    //let total = 0;
    //total += marks[0];        // = 0 + 10    
    //total += marks[1];         // = 10 + 2
    //total += marks[2];        // = 12 + 8  
    //total += marks[3];         // = 20 + 4  
    //total += marks[4];          // = 24 + 6


    let total = 0;
    let i = 0;
    //console.log(i, total);

    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i += 1;
    //console.log(i, total);

    //total += marks[0];
    //total += marks[1];
    //total += marks[2];
    //total += marks[3];
    //total += marks[4];


    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i += 1;
    //console.log(i, total);
    //total += marks[i];
    //i++;
    //console.log(i, total);
    //total += marks[i];
    //i++;
    //console.log(i, total);

    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];

    //for (let i = 0; i < marks.length);

    const count = marks.length;
    const result = total / count;


    //rezultato validacija

    //rezultato grazinimas

    return result;
}

console.log(marksAverage([10, 2, 8, 4, 6]), '->', 6);
console.log(marksAverage([10, 10, 10, 10, 10]), '->', 10);
console.log(marksAverage([1, 1, 1, 1, 1]), '->', 1);
console.log(marksAverage([1, 2, 3, 4, 5]), '->', 3);