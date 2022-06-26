const arguments = process.argv.slice(2); // bu arrayin ilk iki elemanından kurtulabilirsek argümanlara ulaşabiliriz. Bunun için array.slice metodundan faydalanacağız.

function circleArea(r) {
    area = Math.PI*r*2 ;{
        console.log(area)
    }
}

circleArea();



module.exports = {
    circleArea
}

