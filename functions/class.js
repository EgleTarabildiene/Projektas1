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
            const diff = this.tankSize - this.tankLevel;
            this.tankLevel = this.tankSize;
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
    -jeigu pasakomas daugiau nei vienas pakartoja pirma
-galima uzmigdyti
-galima pazadinti

*/

class Parrot {
    constructor(vardas, spalva, amzius) {
        // šis objektas kontekstinis kintamasis
        this.vardas = vardas;
        this.spalva = spalva;
        this.amzius = amzius;
        this.isSleeping = true;
        this.isTalking = true,
            this.apetitas = 40;
        this.pasakytasZodis = '';
        this.apetitoLygis = 5;
    }

    paserti(kiekis) {
        if (this.apetitoLygis + kiekis <= this.apetitas) {
            this.apetitoLygis += kiekis;
        } else {
            const skirtumas = this.apetitas - this.apetitoLygis;
            this.apetitoLygis = this.apetitas;
            console.log(`perdaug, duoti tik ${skirtumas}`);
        }
    }

    kalbek(zodziai) {
        if (this.isSleeping === false) {
            const zodis = zodziai.split(" ")[0];
            this.pasakytasZodis = zodis;
        } if (this.isSleeping === true) {
            console.log(`Reikia pazadinti papuga`);
        }
    }
    pazadinkPapuga() {
        this.isSleeping = false;
    }

    uzmigdykPapuga() {
        this.isSleeping = true;
    }

};




const ara = new Parrot('Pope', 'blue', '5');
console.log(ara)


const kakadu = new Parrot('Pole', 'green', '3');
console.log(kakadu)


ara.paserti(25);
console.log('paserta', ara.apetitoLygis);


ara.kalbek('Labas pope');
console.log('Pope pasako:', ara.pasakytasZodis);