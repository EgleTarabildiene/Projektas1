/*
IF - reiksmiu palyginimas

SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} ...  else if () {} 
if () {} ... else if () {} else {}


PALYGINIMO OPERATORIAI:
- visi: >, <, >=, <=, ===, !=, !==
- naudotini: <, >, >=, <=, ===, !==
- nenaudotini: ==, !=



*/
const profesija = 'Barmenas';
const amzius = 18;
const amziausLimitas = 21;
const vaikoSvoris = 21;

console.log('START');

if (amzius >= amziausLimitas) {
    console.log('Ko noresi?');
} else {
    console.log('Sory..Per mazai metuku');
}

let msg = profesija + ' eina i bara...';
console.log(msg);

if (amzius >= amziausLimitas) {
    msg = ('Tai ko noresi uzsisakyti?');
} else {
    msg = profesija + '... Tu gi vis vien neturi pinigu';
}
console.log(msg);

console.log("END");

console.clear();

//const win = '95';
//const win = '98';
const win = 'xp';

let msgWin = 'Tu neturi windowsu???';

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else if (win === 'xp') {
    msgWin = 'Windows xp';
} else if (win === vista) {
    msgWin = 'Windows Vista';
} else if (win === '10') {
    msgWin = 'Windows 10';
} else {
    msgWin = 'Neatpazinta OS...';
}
console.log(msgWin);

console.clear();
// 2 = 5 vienas = kad vienas ligus kitam: taip nedaryti, geriau ===

if ('4' == 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if ('4' === 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

const saskaita = 100;
const issimti = 50;

let msgAB = 'Inicijuojame bankine operacija...';

if (saskaita >= issimti) {
    msgAB = 'Stai tavo' + issimti + 'pinigai';
} else {
    msgAB = 'Tu tiek neturi, kiek nori issimti...';
}
console.log(msgAB);

if ('4' === 2) {
    console.log('taip');
} else {
    console.log('ne');
}

console.clear();

// Code nesting

const diena = 25;
// Iki 11 val - pusryciu meniu 
// Iki 16 val - dienos meniu 
// Po 16 val - vakaro meniu 
const laikas = 20;

if (diena === 1) {
    if (laikas < 11) {
        console.log('Pirmos menesio dienos meniu: rytas');
    } else if (laikas < 16) {
        console.log('Pirmos menesio dienos meniu: diena');
    } else {
        console.log('Pirmos menesio dienos meniu: vakaras');
    }
} else if (diena === 24 || diena === 25) {
    console.log('Kaledinis meniu');
} else {
    if (laikas < 11) {
        console.log('Standartinis meniu: rytas');
    } else if (laikas < 16) {
        console.log('Standartinis meniu: diena');
    } else {
        console.log('Standartinis meniu: vakaras');
    }
}

if (diena === 24 || diena === 25) {
    console.log('Kaledinis meniu');
} else if (diena === 1 && laikas < 11) {
    console.log('Pirmos menesio dienos meniu: rytas');
} else if (diena === 1 && laikas < 16) {
    console.log('Pirmos menesio dienos meniu meniu: diena');
} else if (diena === 1) {
    console.log('Pirmadienio meniu: vakaras');
} else if (diena !== 1 && laikas < 11) {
    console.log('Standartinis meniu: rytas');
} else if (diena !== 1 && laikas < 16) {
    console.log('Standartinis meniu: rytas');
} else if (diena !== 1) {
    console.log('Standartinis meniu: vakaras');
}
