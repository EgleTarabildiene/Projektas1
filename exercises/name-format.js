function formatName(text) {
    //kaip apibudinti kas yra tvarkingai suformuotas vardas?
    //- Pirma didzioji
    //- Kitos mazosios

    const firstLetter = text[0].toUpperCase();
    const otherLetters = text.slice(1).toLowerCase();

    return firstLetter + otherLetters;


}

console.log(('jonas'), '->', 'Jonas');
console.log(('oNA'), '->', 'Ona');
console.log(('PeTras'), '->', 'Petras');
console.log(('Maryte'), '->', 'Maryte');


function abbr(fullname) {

    const words = fullname.split(' ');
    //const abbr = `${parts[0[0]]}.${parts[1][0]}`;

    let result = '';

    for (const word of words) {
        result += `${word[0]}.`;
    }
    return result;
}


console.log(abbr('Chuck Norris'));
console.log(abbr('Pamela Anderson'));
console.log(abbr('David Haselhofas'));
console.log(abbr('Zan Klod Van Dam'));


