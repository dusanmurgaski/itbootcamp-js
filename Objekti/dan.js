let dan = {
    datum: "2021/05/17",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 15, 8],
    prosecnaTemp: function () {
        let suma = 0;
        this.temperature.forEach(temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    }
};

// 1. Napisati metode koje odredjuje prosecnu temperaturu izmerenu tog dana

console.log(dan.prosecnaTemp());