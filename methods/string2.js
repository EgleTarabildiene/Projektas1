// 
//            0       8
const text = 'Pomidoras';
// at 
console.log('--------------at grazina pasirinkta raide -is kito galo');

console.log(text.at(0)), text[0];
console.log(text.at(1)), text[1];
console.log(text.at(2)), text[2];
console.log(text.at(3)), text[3];
console.log(text.at(9)), text[9];
console.log(text.at(-1)), text[-1];
console.log(text.at(-2)), text[-2];
console.log(text.at(-3)), text[-3];
console.log(text.at(-4)), text[-4];
console.log(text.at(-2)), text[-5];

console.log('--------------charCodeAt');



console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('c'.charCodeAt(0));
console.log('d'.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('B'.charCodeAt(0));
console.log('C'.charCodeAt(0));
console.log('D'.charCodeAt(0));

console.log('1'.charCodeAt(0));
console.log('D'.charCodeAt(0));




console.log(String.fromCharCode(168));
console.log(String.fromCharCode(169));
console.log(String.fromCharCode(170));

console.log('--------------endsWith tiesa ar melas');

console.log(text.endsWith('a'));
console.log(text.endsWith('s'));
console.log(text.endsWith('as'));

console.log('--------------startsWith tiesa ar melas');

console.log(text.startsWith('as'));
console.log(text.startsWith('P'));
console.log(text.startsWith('Pom'));
console.log(text.startsWith('Pomas'));

console.log('-------------includes');


console.log('Pomidoras'.includes('0'));
console.log('Pomidoras'.includes('omi'));
console.log('Pomidoras'.includes('omitronas'));
console.log('Pomidoras'.includes('omigod'));
console.log('Pomidoras'.includes('POmi'));
console.log('Pomidoras'.includes('Pomi'));
console.log('Pomidoras'.includes('ras'));

console.log('-------------indexOf');

console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('5'));
console.log('Pomidoras'.indexOf('5'));
console.log('Pomidoras'.indexOf('defretr'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('d'));
console.log('Pomidoras'.indexOf('d', 0));
console.log('Pomidoras'.indexOf('d', 1));
console.log('Pomidoras'.indexOf('d', 2));
console.log('Pomidoras'.indexOf('d', 3));
console.log('Pomidoras'.indexOf('d', 4));
console.log('Pomidoras'.indexOf('d', 5));
console.log('Pomidoras'.indexOf('d', 6));
console.log('Pomidoras'.indexOf('d', 7));

console.log('--------------');
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));
console.log('Pomidoras'.indexOf('o', 3));
console.log('Pomidoras'.indexOf('o', 5));
console.log('Pomidoras'.indexOf('o', 6));  //kiek nutoles nuo tos raides

// pakartok teksta 'labas' 3 kartus -> labas labas labas

console.log('-------------repeat pakartoja');

function repeat(text, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
}

console.log(repeat('labas', 0));
console.log(repeat('rytas', 1));
console.log(repeat('Lietuva', 2));
console.log(repeat('???', 3));
console.log(repeat('labas', 4));
console.log(repeat('labas', 5));

//console.log(repeat('labas'.repeat(0));

console.log('labas'.repeat(0));
console.log('rytas'.repeat(1));
console.log('Lietuva'.repeat(2));
console.log('???'.repeat(3));
console.log('labas'.repeat(4));
console.log('labas'.repeat(5));

const vasara = 'vasara'.replace('a', '-')
'vasara'.replace('a', '-')
'vasara'.replace('a', '-');

console.log(vasara);

const vasara2 = 'vasaravasara'.replaceAll('a', '-')

console.log(vasara2);

console.log('------------slice');

console.log('Pomidoras'.slice());
console.log('Pomidoras'.slice(0));
console.log('Pomidoras'.slice(1));
console.log('Pomidoras'.slice(2));
console.log('Pomidoras'.slice(3));


//           012345678
console.log('Pomidoras'.slice(0, 5));
console.log('Pomidoras'.slice(1, 5));
console.log('Pomidoras'.slice(2, 5));
console.log('Pomidoras'.slice(3));
console.log('Pomidoras'.slice(3));

console.log('------------slice');

// 87654321-
// +012345678
console.log('Pomidoras'.slice(-1));
console.log('Pomidoras'.slice(-2));
console.log('Pomidoras'.slice(-3));
console.log('Pomidoras'.slice(-4));
console.log('Pomidoras'.slice(-4, -2));
console.log('Pomidoras'.slice(2, -2));

console.log('------------split');

console.log('Pomidoras'.split());
console.log('Pomidoras'.split('m'));
console.log('Pomidoras'.split('i'));
console.log('Pomidoras'.split('o'));


console.log('vasara'.split('s'));
console.log('vasara'.split('v'));
console.log('vasara'.split('v')[0].length);  //
console.log('vasara'.split('v')[1].length);

console.log('vasara'.split('a'));
console.log('vasara'.split('x'));
console.log(''.split('a'));
console.log(''.split(''));
console.log('vasara'.split('')); //masyvas paraidziui

console.log('---------uperlower')


console.log('vasara'.toUpperCase());
console.log('VASara'.toUpperCase());
console.log('vasara'.toLowerCase());

console.log('---------trim iskerpa')
console.log('vasara'.trim('s'));
console.log(`"${'vasara'.trim()}"`);
console.log(`"${'v a s a r a'.trim()}"`);
console.log(`"${'v  a  s  a  r  a'.trim()}"`);
console.log(`"${'v   a   s   a   r   a'.trim()}"`);
console.log(`"${'           vasara'.trim()}"`);
console.log(`"${'     vasara'.trim()}"`);
console.log(`"${'     vas      ara'.trim()}"`);



