/*
BOOLEN - logine reiksme

Galimos reiksmes:
- true
- false

Loginiai operatoriai:
- && (and)   ir
- || (or)    arba
- ! (not /invert)

*/

const arLyja = false;
const arSninga = true;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

const vardas = "Jonas";

const arNurodytasVardas = true;

console.clear();

// Sportas
//-varzybos vyksta tik dienos metu
//-varzybos vyksta tik jei turime bent 2 komandos
//

const arDiena = true;
const arYraDviKomandos = true;

// varzybos vyksta kai tenkinamos VISOS salygos
const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos:', arVykstaVarzybos);


//KERMOSIUS
// - vaikas noretu gaidelio
//- vaikas noretu lasdeles
// -vaikas noretu grybuko

const arTurimGaidelio = true;
const arTurimLasdeles = true;
const arTurimGrybuko = true;

//saldaini gauna kai turimas Bent Viena preke
const arVaikasGausSaldaini = arTurimGaidelio || arTurimLasdeles || arTurimGrybuko;
console.log('Kermosius:', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a || b || c, '->', true);
console.log(a && b && c, '->', false);
console.log(a && b || c, '->', true);
console.log(a || b && c, '->', true);

console.log(false && false || false, '->', false);
console.log(false && false || true, '->', true);
console.log(false && true || false, '->', false);
console.log(false && true || true, '->', true);
console.log(true && true || false, '->', true);
console.log(true && true || true, '->', true);
console.log(true && false || false, '->', false);
console.log(true && false || true, '->', true);


console.log(false || false && false, '->', false);
console.log(false || false && true, '->', false);
console.log(false || true && false, '->', false);
console.log(false || true && true, '->', true);
console.log(true || true && true, '->', true);
console.log(true || false && true, '->', true);

console.log(true || true && false, '->', false);
console.log(true || false && false, '->', false);

console.log((true && true) || (false, '->', false));
console.log((true && true) || false);

console.log(((true && true) || false) && false);

console.clear();

console.log(!true);
console.log(!false);

const arMiega = false;
const arNeMiega = true;

console.log(!arMiega);

console.clear();

// Visi stringai yra true, iskirus tuscias
console.log(!!'Labas');
console.log(!!'');

//Visi skaiciai yra true, iskirus (nulis)
console.log(!!5);
console.log(!!-5);
console.log(!!0);

console.log("Namu darbai-----------------!");

// positive, negative numbers
// truthy, falsy number values  (true/ false)

console.log(false && false || false || false, '->', false);
console.log(false && false || false || true, '->', true);
console.log(false && false || true || true, '->', true);
console.log(false && true || true || true, '->', true);
console.log(true && true || true || true, '->', true);
console.log(true && true || true || false, '->', true);
console.log(true && true || false || false, '->', true);
console.log(true && false || false || false, '->', false);

console.log(true && false || false || true, '->', true);
console.log(false && true || true || false, '->', true);
console.log(false && true || false || true, '->', true);
console.log(false && true || false || false, '->', false);
console.log(false && false || true || false, '->', true);
console.log(true && false || true || false, '->', true);
console.log(true && false || true || true, '->', true);
console.log(true && true || false || true, '->', true);

console.log("----------");
console.log(false || false && false || false, '->', false);
console.log(false || false && false || true, '->', true);
console.log(false || false && true || true, '->', true);
console.log(false || true && true || true, '->', true);
console.log(true || true && true || true, '->', true);
console.log(true || true && true || false, '->', true);
console.log(true || true && false || false, '->', true);
console.log(true || false && false || false, '->', true);

console.log(true || false && false || true, '->', true);
console.log(false || true && true || false, '->', true);
console.log(false || true && false || true, '->', true);
console.log(false || true && false || false, '->', false);
console.log(false || false && true || false, '->', false);
console.log(true || false && true || false, '->', true);
console.log(true || false && true || true, '->', true);
console.log(true || true && false || true, '->', true);
console.log("----------");
console.log(false || false || false && false, '->', false);
console.log(false || false || false && true, '->', false);
console.log(false || false || true && true, '->', true);
console.log(false || true || true && true, '->', true);
console.log(true || true || true && true, '->', true);
console.log(true || true || true && false, '->', true);
console.log(true || true || false && false, '->', true);
console.log(true || false || false && false, '->', true);

console.log(true || false || false && true, '->', true);
console.log(false || true || true && false, '->', true);
console.log(false || true || false && true, '->', true);
console.log(false || true || false && false, '->', true);
console.log(false || false || true && false, '->', false);
console.log(true || false || true && false, '->', true);
console.log(true || false || true && true, '->', true);
console.log(true || true || false && true, '->', true);

console.log("----------");
console.log(false || false && false && false, '->', false);
console.log(false || false && false && true, '->', false);
console.log(false || false && true && true, '->', false);
console.log(false || true && true && true, '->', true);
console.log(true || true && true && true, '->', true);
console.log(true || true && true && false, '->', true);
console.log(true || true && false && false, '->', true);
console.log(true || false && false && false, '->', true);

console.log(true || false && false && true, '->', true);
console.log(false || true && true && false, '->', false);
console.log(false || true && false && true, '->', false);
console.log(false || true && false && false, '->', false);
console.log(false || false && true && false, '->', false);
console.log(true || false && true && false, '->', true);
console.log(true || false && true && true, '->', true);
console.log(true || true && false && true, '->', true);


console.log("----------");
console.log(false && false && false || false, '->', false);
console.log(false && false && false || true, '->', true);
console.log(false && false && true || true, '->', true);
console.log(false && true && true || true, '->', true);
console.log(true && true && true || true, '->', true);
console.log(true && true && true || false, '->', true);
console.log(true && true && false || false, '->', false);
console.log(true && false && false || false, '->', false);

console.log(true && false && false || true, '->', true);
console.log(false && true && true || false, '->', false);
console.log(false && true && false || true, '->', true);
console.log(false && true && false || false, '->', false);
console.log(false && false && true || false, '->', false);
console.log(true && false && true || false, '->', false);
console.log(true && false && true || true, '->', true);
console.log(true && true && false || true, '->', true);

console.log("----------");
console.log(false && false || false && false, '->', false);
console.log(false && false || false && true, '->', false);
console.log(false && false || true && true, '->', true);
console.log(false && true || true && true, '->', true);
console.log(true && true || true && true, '->', true);
console.log(true && true || true && false, '->', true);
console.log(true && true || false && false, '->', true);
console.log(true && false || false && false, '->', false);

console.log(true && false || false && true, '->', false);
console.log(false && true || true && false, '->', false);
console.log(false && true || false && true, '->', false);
console.log(false && true || false && false, '->', false);
console.log(false && false || true && false, '->', false);
console.log(true && false || true && false, '->', false);
console.log(true && false || true && true, '->', true);
console.log(true && true || false && true, '->', true);
console.log("--------");
console.log(false && false || false && false, '->', false);
console.log(false && false || false && true, '->', false);
console.log(false && false || true && true, '->', true);
console.log(false && true || true && true, '->', true);
console.log(true && true || true && true, '->', true);
console.log(true && true || true && false, '->', true);
console.log(true && true || false && false, '->', true);
console.log(true && false || false && false, '->', false);

console.log(true && false || false && true, '->', false);
console.log(false && true || true && false, '->', false);
console.log(false && true || false && true, '->', false);
console.log(false && true || false && false, '->', false);
console.log(false && false || true && false, '->', false);
console.log(true && false || true && false, '->', false);
console.log(true && false || true && true, '->', true);
console.log(true && true || false && true, '->', true);

console.log("--------");

console.log(false && false && false && false, '->', false);
console.log(false && false && false && true, '->', false);
console.log(false && false && true && true, '->', true);
console.log(false && true && true && true, '->', true);
console.log(true && true && true && true, '->', true);
console.log(true && true && true && false, '->', true);
console.log(true && true && false && false, '->', true);
console.log(true && false && false && false, '->', false);

console.log(true && false && false && true, '->', false);
console.log(false && true && true && false, '->', false);
console.log(false && true && false && true, '->', false);
console.log(false && true && false && false, '->', false);
console.log(false && false && true && false, '->', false);
console.log(true && false && true && false, '->', false);
console.log(true && false && true && true, '->', false);
console.log(true && true && false && true, '->', false);

console.log("--------");

console.log(false || false || false || false, '->', false);
console.log(false || false || false || true, '->', true);
console.log(false || false || true || true, '->', true);
console.log(false || true || true || true, '->', true);
console.log(true || true || true || true, '->', true);
console.log(true || true || true || false, '->', true);
console.log(true || true || false || false, '->', true);
console.log(true || false || false || false, '->', false);

console.log(true || false || false || true, '->', true);
console.log(false || true || true || false, '->', true);
console.log(false || true || false || true, '->', true);
console.log(false || true || false || false, '->', true);
console.log(false || false || true || false, '->', true);
console.log(true || false || true || false, '->', true);
console.log(true || false || true || true, '->', true);
console.log(true || true || false || true, '->', true);