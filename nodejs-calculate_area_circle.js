const arguments = process.argv.slice(2); // bu arrayin ilk iki elemanından kurtulabilirsek argümanlara ulaşabiliriz. Bunun için array.slice metodundan faydalanacağız.

function circleAreaCalculate(r) {
    area = Math.PI*r*2 ;{
        console.log(area)
    }
}

circleAreaCalculate(arguments[0]*1);

