let dan = {
    datum: "2021/05/17",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [26, 21, 29, 30, 30, 31, 23],
    // 1. Napisati metode koje odredjuje prosecnu temperaturu izmerenu tog dana
    prosecnaTemp: function () {
        let suma = 0;
        this.temperature.forEach(temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    },
    // 2. Metoda koja prebrojava i vraca koliko merenja je bilo sa natprosecnom temperaturom
    natprosecna: function () {
        let avg = this.prosecnaTemp();
        let br = 0;
        this.temperature.forEach(element => {
            if (element > avg) {
                br++;
            }
        });
        return br;
    },
    // 3. Metoda koja prebrojava i vraca koliko merenja je bilo sa maks temperaturom
    maksTemp: function () {
        let max = this.temperature[0];
        let br = 0;
        this.temperature.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
        console.log(max);

        this.temperature.forEach(element => {
            if (element == max) {
                br++;
            }
        });
        return br;
    },
    // 4. Prima dva parametra koji predstavljaju dve 
    //temperature. Potrebno je da metodi vrati broj merenja 
    //u toku dana cija je vrednosti izmedju ove dve zadate temperature
    // (ne uklj te dve vrednosti)
    //  temperature: [10, 15, 21, 21, 21, 15, 8],
    cetZad: function (a, b) {
        if (a > b) {
            let c = a;
            a = b;
            b = c;
        }

        let br = 0;
        this.temperature.forEach(element => {
            if (element > a && element < b) {
                br++;
            }
        });
        return br;

    },
    // 5. Vraca true ukoliko je u vecini dana temperatura bila iznad proseka. U suprotnom vraca false
    tempIznadProseka: function () {
        let brojNatprosecnih = this.natprosecna();
        if (brojNatprosecnih > this.temperature.length / 2) {
            return true;
        }
        else {
            return false;
        }
    },
    // 6. 
    ledenDan: function () {
        // let leden = true;
        // this.temperature.forEach(element => {
        //     if (element >= 0) {
        //         leden = false;
        //     }
        // });
        // return leden;
        // 2.nacin
        // for (let i = 0; i < this.temperature.length; i++) {
        //     if (this.temperature[i] >= 0) {
        //         return false;
        //     }
        // }
        // return true;
        // 3. nacin
        let leden = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] >= 0) {
                leden = false;
                break;
            }
        }
        return leden;
    },
    //7. Za dan se smatra da je tropski ukoliko ni jedna temperatura izmerena tog dana nije iznsoila ispod 24. stepena. Metod vraca true ukoliko je dan bio tropski u suprotno mvraca false
    tropskiDan: function () {
        let tropski = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] < 24) {
                tropski = false;
                break;
            }
        }
        return tropski;
    },
    //8. Dan je nepovoljan ako je razlika izmedju neka dva uzastopna merenja vec od 8 stepeni. metod vraca true ukoliko je dan bio nepovoljan a false u suprotnom
    osamStepeni: function () {
        let nepovoljan = false;
        for (let i = 0; i < this.temperature.length - 1; i++) {
            if (this.temperature[i] - this.temperature[i + 1] > 8 || this.temperature[i + 1] - this.temperature[i] > 8) {
                nepovoljan = true;
                break;
            }
        }
        return nepovoljan;
    }

};

// 1. Napisati metode koje odredjuje prosecnu temperaturu izmerenu tog dana
console.log(dan.prosecnaTemp());


// 2. Metoda koja prebrojava i vraca koliko merenja je bilo sa natprosecnom temperaturom
console.log(dan.natprosecna());

// 3. Metoda koja prebrojava i vraca koliko merenja je bilo sa maks temperaturom

console.log(dan.maksTemp());
// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metodi brati broj merenja u toku dana cija je vrednosti izmedju ove dve zadate temperature (ne uklj te dve vrednosti)
console.log(dan.cetZad(11, 20));


// 5. Vraca true ukoliko je u vecini dana temperatura bila iznad proseka. U suprotnom vraca false
console.log(dan.tempIznadProseka());

//6. Za dan se smatra da je leden ukoliko nijedna temperatura
// izmrena tog dana nije iznosilai iznad 0 stepeni. Metod vraca true 
// ukoliko je dan bio leden, u suprontom vraca false
console.log(dan.ledenDan());

//7. Za dan se smatra da je tropski ukoliko ni jedna temperatura izmerena tog dana nije iznsoila ispod 24. stepena. Metod vraca true ukoliko je dan bio tropski u suprotno mvraca false
console.log(dan.tropskiDan());

//8. Dan je nepovoljan ako je razlika izmedju neka dva uzastopna merenja vec od 8 stepeni. metod vraca true ukoliko je dan bio nepovoljan a false u suprotnom
console.log(dan.osamStepeni());


