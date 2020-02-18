var persona = {
    nombre: 'Tomas',
    apellido: 'Basile',
    edad: 28
}

//Funcion para hacer todo en mayusculas.
function mayusculiza(texto){
    var texto = texto.toUpperCase()
    return texto
};

//Funcion para hacer todo en minuscula.
function minusculiza(texto){
    var texto = texto.toLowerCase()
    return texto
};

var numero = (200.3 * 3);

function redondeo(numero){
    var numero = Math.round(numero)
    console.log(`Redondeo de numero:${numero} `)
    // Esto devuelve un string con 2 decimales
    var numero = numero.toFixed(2)
    console.log(`Redondeo de numero:${numero} `)
    // Esto lo transforma en float
    var numero = parseFloat(numero)
    console.log(`Redondeo de numero:${numero} `)
};

redondeo(numero);

console.log(mayusculiza(persona.nombre), minusculiza(persona.apellido));
