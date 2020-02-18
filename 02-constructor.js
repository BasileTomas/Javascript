// Genero el constructor para personas
function creadorPersona(nombre, apellido, peso, libros){
    this.nombre = nombre;
    this.apellido = apellido;
    this.peso = peso;
    this.libros = libros;
}

// Creo los objetos
var tomas = new creadorPersona('Tomas', 'Basile', 65, 50);
var pablo = new creadorPersona('Pablo', 'Caro', 50, 10);
var cecilia = new creadorPersona('Cecilia', 'Ulfe', 55, 15);

// Creo el array
var personas = [tomas, pablo, cecilia];

// Recorro el array
for(let i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} pesa ${personas[i].peso}.`)
}

// Filtro segun condición -- clase 20
const esFlaco = personas => personas.peso < 60;
var personasFlacas = personas.filter(esFlaco);
console.log(personasFlacas);

// Función map -- clase 21
const pasarPesoAGramo = personas => ({
    ...personas,
    peso: personas.peso * 100
});
var personasGrs = personas.map(pasarPesoAGramo);
console.log(personasGrs);

// Función reducer -- clase 22
const reducer = (acum, {libros}) => acum + libros;
var totalLibros = personas.reduce(reducer, 0);
console.log(`En total las personas tienen ${totalLibros} libros.`)

