const student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(student['name']);
console.log(student.age);
console.log(student.isMarried);

const noriuSuzinoti = 'name';
//const noriuSuzinoti = 'age';
//const noriuSuzinoti = 'isMarried';

const name = student[noriuSuzinoti]
// const name = student = ['name];

console.log(name);

console.log([10, 555].length);
console.log('labas'.length);
console.log(student.length);

const keys = Object.keys(student);
console.log(keys);

const keyCount = keys.length;
console.log(keyCount);

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    price: 300,
}

const carKeys = Object.keys(car);


for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[1];
    const value = car[key];
    console.log(i, key);
    console.log(i, key, value);
}

for (const key in car) {
    const value = car[key];
    console.log(key, value);
}