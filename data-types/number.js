/*
NUMBERS

KINTAMUJU INICIAVIMAS:
-const (default)
- let (kai informacija turi buti kintanma)
- var (niekada nenaudoti, nebent zinai ka darai)

SKAICIU KATEGORIJOS
-normalus
    - teigiami/neigiami
    - sveikieji /desimtainiai
- ne normalus
    - begalybes (Infinity) 
    - NaN (not-a-number) 

    OPERATORIAI:
    - priskirimo (=)
    - matematiniai:
        - aritmetiniai: +, -, /, *, % (liekana), ** (kelimas laisniu), 
        - aritmetiniai priskirimo (sutrumpinti): +=, -=, /=, *=, %= (liekana), 
        **= (kelimas laisniu),
*/

console.log(1);
console.log(2);
console.log(3.1415);
console.log(-4);
console.log(-5.555);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.clear();

console.log(555);

const a = 1;
const b = 22;
const PI = 3.1415;
const pi = 777;
const duZodziai = 7778;
const trysIlgiZodziai = 8888;

console.log(a);
console.log(b);
console.log(PI);
console.log(pi);

const number1 = 111;
const number2 = 222;
const number3 = 333;

console.log(number1);
console.log(number2);
console.log(number3);

const sum12 = number1 + number2;
console.log(sum12);

const sum23 = number2 + number3;
console.log(sum12);

const sum13 = number1 + number3;
console.log(sum13);

const x = 1 + 2 + 3 + sum12;
console.log(x);



console.clear();


const n1 = 7;
const n2 = 5;

console.log(n1, n2);
console.log('Labas, rytas');


const sum = n1 + n2;
console.log(n1, '+', n2, '=', sum);

const diff = n1 - n2;
console.log(n1, '+', n2, '=', diff);

const multi = n1 * n2;
console.log(n1, '*', n2, '=', multi);

const div = n1 / n2;
console.log(n1, '*', n2, '=', div);



// 7 + 5 = 12 turi parodyti zenklus ir veiksma (virsutinis)


const du0 = 2 ** 0;
const du1 = 2 ** 1;
const du2 = 2 ** 2;
const du3 = 2 ** 3;
const du4 = 2 ** 4;

console.log(du0);
console.log(du1);
console.log(du2);
console.log(du3, 2 * 2 * 2);
console.log(du4);

console.clear();

console.log(28 / 5);
console.log(28 % 5);

console.log(9 / 3);
console.log(9 % 3);

//Pirmadienis = 1, 8, 15
//Antradienis = 2, 9, 16
//...
//Sekmadienis = 7, 14


//naktis = 0; diena = 1; turi gautis atsakymas (apacioi)



const diena = 20;
const savaitesDiena = diena % 7;

console.log(diena, savaitesDiena);

const valandos = 20;

const dienaArNaktis = (valandos - (valandos % 12)) / 12;
console.log(dienaArNaktis);

// 2+2*2 = 6
// 2+2*2 = 8

console.log(2 + 2 * 2);
console.log(2 + 2 * 2 ** 2); //laisnio rodiklis turi pirmuma.

console.log(4 * 4 / 4);   //atliekami veiksmai is eiles jei nera skliausteliu
console.log(4 / 4 * 4);

console.log(45214 / 0);
console.log(-45214 / 0);
console.log(45214 / -0);
console.log(-45214 / -0);

console.log(45214 * 0);
console.log(-45214 * 0);
console.log(45214 * -0);

console.clear();

let pinigine = 10;
console.log(pinigine);

pinigine = pinigine + 5;
console.log(pinigine);

pinigine = pinigine + 8;
console.log(pinigine);

pinigine = pinigine - 7;
console.log(pinigine);

console.log("--------");

let money = 10;
console.log(money);

money += 5;
console.log(money);

money += 8;  //sutrumpinimas
console.log(money);

money -= 7;
console.log(money);


console.clear();


let k = 10;
console.log(k);

k += 8;
console.log(k);

k *= 2;
console.log(k)

k /= 4;
console.log(k)

k %= 7;
console.log(k)

k -= 7;
console.log(k)

k **= 2;
console.log(k)



console.clear();

let i = 0;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;;
console.log(i);

i++;
console.log(i);

i--;
console.log(i);

console.clear();
// dydinimas vyksta po panaudojima 
let p = 0;
console.log(p);
console.log(p++);
console.log(p++);
console.log(p++);
console.log(p++);
console.log('-----------');

// dydinimas vyksta pries panaudojima (spausdinima)
let r = 0;
console.log(r);
console.log(++r);
console.log(++r);
console.log(++r);
console.log(++r);
console.log(++r);