/*


*/

console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][3]);
console.log([10, 2, 8, 4, 6][4]);
console.log([10, 2, 8, 4, 6][5]);
console.log([10, 2, 8, 4, 6][-1]);


const marks = [10, 2, 8, 4, 6];
console.log(marks);

marks[1] = 5;
console.log(marks);

marks[4] = 9;
console.log(marks);

marks[6] = 666;
console.log(marks);

marks[5] = 555;
console.log(marks);
console.log('--------push ideda skaiciu is galo');

const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);

jonas.push(4, 6);
console.log(jonas);

jonas.push(1, 2, 3, 44, 55, 66);
console.log(jonas);


console.log('--------unshift ideda skaiciu is priekio');

const maryte = [];
console.log(maryte);

maryte.unshift(10);
console.log(maryte);

maryte.unshift(2);
console.log(maryte);

maryte.unshift(8);
console.log(maryte);

maryte.unshift(4, 6);
console.log(maryte);

console.log('--------push,unshift,pop-pasalina is galo,shift-netenka pirmo nario');


const petras = [10];
console.log(petras);

petras.push(2, 3);
petras.unshift(8, 9);
console.log(petras);

console.log(petras.pop());
console.log(petras);

console.log(petras.shift());
console.log(petras);

console.clear();
console.log('-------at-duoda pasirinkta-array nuo piekio ar is galo');

console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(2));
console.log([10, 2, 8, 4, 6].at(3));
console.log([10, 2, 8, 4, 6].at(4));
console.log([10, 2, 8, 4, 6].at(5));
console.log([10, 2, 8, 4, 6].at(-1));
console.log([10, 2, 8, 4, 6].at(-2));
console.log([10, 2, 8, 4, 6].at(-3));
console.log([10, 2, 8, 4, 6].at(-4));
console.log([10, 2, 8, 4, 6].at(-5));

console.log('--------concat-sujungia-array');
const vienas = [1, 1, 1];
const du = [2, 2, 2];
const trys = [3, 3, 3];

const vienasDu = vienas.concat(du);
console.log(vienasDu);

const vienasTrys = vienas.concat(trys);
console.log(vienasTrys);

const trysVienas = trys.concat(vienas);
console.log(trysVienas);

const trysVienasDu = trys.concat(vienas, du);
console.log(trysVienasDu);

const trysVienasDuXXX = trys.concat(5, vienas, 7, du, 9);
console.log(trysVienasDuXXX);

console.log('--------includes-tiesa ar melas ar skaicius yra sarase');


console.log([10, 2, 8, 4, 6].includes(5));
console.log([10, 2, 8, 4, 6].includes(8));
console.log([10, 2, 8, 4, 6].includes(10));
console.log([10, 2, 8, 4, 6].includes(2));

console.log('--------indexOf array vietos indeksas');

console.log([10, 2, 8, 4, 6].indexOf(5));
console.log([10, 2, 8, 4, 6].indexOf(8));
console.log([10, 2, 8, 4, 6].indexOf(10));
console.log([10, 2, 8, 4, 6].indexOf(2));

console.log('--------join  iskleidzia array i stringa padaro');

const john = ['j', 'jay', 'jail', 'join', 'joint'];
console.log(john);
console.log(john.join());
console.log(john.join(''));
console.log(john.join(','));
console.log(john.join('-'));
console.log(john.join('-=-'));

console.log('--------reverse-is kito galo grazina');

const abc = ['a', 'b', 'c', 'd'];
console.log(abc);

abc.reverse();
console.log(abc);

abc.reverse();
console.log(abc);

console.log('--------slice-iskerpa');

const ona = ['suo', 'kate', 'papuga', 'ziurkenas', 'sinsila'];

console.log(ona.slice());
console.log(ona.slice(2));
console.log(ona.slice(2, 3));
console.log(ona.slice(1, -1));


/*
UZD 1
Duodamas tekstas, kuris turetu buti kaip vardas.
Bet jis suformatotas padrikai...
Reikia duota teksta suformatuoti taip, jog butu
tvarkingas vardas.


 jonas -> Jonas
 ona -> Ona
 PeTrAs -> Petras
 Maryte -> Maryte

 UZD 2
Duodamas vardas ir pavarde.
Grazinti trumpini (inicialai).

pvz. Chuck Norris -> C.N
*/

//onst cekas = [Chuck, Norris];


let vard1 = '';
let vard2 = '';
console.log('--------------------namu darbas-------------');
let vard = 'mantas'[0];
vard1 = vard.toUpperCase();
vard2 = vard.slice(1);

console.log(vard2);
let vard3 = vard1 + vard2;
console.log(vard3);

