/*
OOP - "objektinis" programavimas
*/

//const car = {
//    barand: 'Audi',
//    model: '80',
//    color: 'red',
//    doors: 5,
//    isEngineOn: false,
//    isRadionOn: false,
//    windowsHeight: [0, 0.5, 1, 1],
//    // galimibe ijunkti varykli
//    // galimibe ijunkti varykli
//    // galimibe pakelti langa
//    // galimibe nuleisti langa
//    // galimibe ijunkti radija
//    // galimibe isjunkti radija
//};

class Car {
    constructor(brand, model, color, price) {
        // šis objektas kontekstinis kintamasis
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.isEngineOn = false;
        this.isRadionOn = false,
            this.windowsHeight = [1, 1, 1, 1],
            this.tankSize = 40;
        this.tankLevel = 5;

    }
    turnOnEngine() {
        this.isEngineOn = true;
    }
    turnOffEngine() {
        this.isEngineOn = false;
    }

    fillTank(amount) {
        if (this.tankLevel + amount <= this.tankSize) {
            this.tankLevel + amount;
        } else {
            const diff = this.tankSize;
            console.log(`Per daug, ipilta tik ${diff}`);
        }
    }

}

const audi = new Car('Audi', '80', 'red', 300);
console.log(audi);

const tesla = new Car('Tesla', 'Roadster 2', 'black', 100_000);
console.log(tesla);

//console.log(audi.isEngineOn);
//console.log(tesla.isEngineOn

//audi.turnOnEngine();
//console.log(audi.isEngineOn);
//console.log(tesla.isEngineOn);

//tesla.turnOnEngine();
//console.log(audi.isEngineOn);
//console.log(tesla.isEngineOn);

//tesla.turnOfEngine();
//audi.turnOfEngine();
//console.log(audi.isEngineOn);
//console.log(tesla.isEngineOn);


console.log('Talpa:', audi.tankSize);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(5);
console.log('Dabartinis kiekis:', audi.tankLevel)

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);


/*
//reikia class'es: Parrot
Savybes :
-vardas
-spalva
-amzius
-miega/nemiega

Functionalumas:
-gali pakartoni pasakyta zodi
    -jeigu miega, nereguoja
    -jeigu pasakomas daugiau nei vienas pakiartoja pirma


*/

class Parrot {
    constructor(vardas, spalva, amzius) {
        // šis objektas kontekstinis kintamasis
        this.vardas = vardas;
        this.spalva = spalva;
        this.age = amzius;
        this.isSleping = false;
        this.talking = false,
            this.windowsHeight = [1, 1, 1, 1],
            this.apetite = 40;


    }
};

const ara = new Parrot('Ara', 'blue', '5');
console.log(ara); 89