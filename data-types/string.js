/* 
STRING -tekstas, simboliu grandinele

Iniciavimo simboliai/budai: vienguba ('), dvyguba ("") kabutes ir  ` (backtick).
*/

const text1 = 'Pirmas tekstas.';
console.log(text1);

const text2 = "O cia jau antras tekstas.";
console.log(text2);

// Cia yra tekstas be kabuciu.
const text31 = 'Cia yra tekstas be kabuciu.';
const text32 = "Cia yra tekstas be kabuciu.";
console.log(text31);
console.log(text31);

//Vienguba (') kabute.
const kabute21 = "Vienguba (') kabute.";
console.log(kabute21);

//Dvyguba("") kabute
const kabute12 = 'Dvyguba (") kabute.';
console.log(kabute12);

//Vienguba (') ir dvyguba (") kabutes.
const kabute = "";

const vardas = 'Chuck'
const pavarde = 'Norris';

const fullName = vardas + ' ' + pavarde;  //iterpiam tarpa ' ' kad svaru butu
console.log(fullName);

const kabuteMix1 = "Vienguba (') ir" + 'dvyguba (") kabutes.';
console.log(kabuteMix1);

const kabuteMix21 = 'Vienguba (\') ir dvyguba (") kabutes.';
console.log(kabuteMix21);

const kabuteMix22 = "Vienguba (') ir dvyguba (\") kabutes.";
console.log(kabuteMix22);

const kabuteMix23 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabuteMix23);

const kabuteMix24 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabuteMix24);













const gele = 'roze';
const spalva = 'raudona';

//As turiu tulpe kuri yra geltona.

const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const backtick = `Backtick sakinys`;
console.log(backtick);

const backtick12 = `Vienguba (') ir dvyguba (") kabutes.`;
console.log(backtick12);

const backtick123 = `Vienguba, dvyguba (") ir backtick (\`) kabutes.`;
console.log(backtick123);

const backtickGelytes = `As turiu ${gele} kuri yra ${spalva}.` //tik su `
console.log(backtickGelytes);

const n1 = 77;
const n2 = 55;

// 7 + 5 = 12 
const pliusas = `${n1} + ${n2} = ${n1 + n2}`;
console.log(pliusas);



//Stai sarasas: 
// -pirmas
// -antras
// -trecias

// \r - return
// \n - new line
// \t - tab

const eilutes = 'Stai sarasas:\r\n\
- pirmas\r\n- antras\r\n\
- trecias';

console.log(eilutes);

const HTML = '<header>\r\n\
\t<img src="#"alt ="">\r\n\
\t<nav>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t</nav >\r\n\
</header>';


const HTML2 = `<header> 
    < img src = "#" alt = "" >
        <nav>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
        </nav>
</header >`;

console.log(HTML);
console.log(HTML2);



