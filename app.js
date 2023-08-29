const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 146.41;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.0054;
    // retornamos el valor
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  };