// Creo el prototipo Persona que tiene sus funciones
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    // Creo una función 'saludar' para el prototipo de Persona
    saludar(fn){
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre}, ${apellido}.`)
        if(fn){
            fn(nombre, apellido);
        }
    }
    // Creo una función para ver si la Persona es alta
    soyAlto(){
        (this.altura > 1.80) ? console.log(`Yo, ${this.nombre}, soy alto.`) : console.log(`Yo, ${this.nombre}, no soy alto.`); 
    }

}

// Creo el prototipo Desarrollador que extiende de Persona sus atributos
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    // Creo una función 'saludar' para el prototipo de Persona
    saludar(fn){
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador.`)
        if(fn){
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabia que eras Desarrollador.`)
    }
}

// Creo un objeto nuevo usando el prototipo de persona y uso las funciónes
var tomas = new Persona('Tomas', 'Basile');
tomas.saludar(responderSaludo);

var gonzalo = new Desarrollador('Gonzalo', 'Bertinat');
gonzalo.saludar(responderSaludo);

var jordan = new Persona('Michael', 'Jordan', 2.00);
jordan.soyAlto(); 