// Creo el prototipo de persona
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

// Creo que Desarrollador que heredara de persona
function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

// Como hacer un objeto que 'herede' de otro
function heredaDe(prototipoHijo, prototipoPadre){
    var noop = function(){}
        noop.prototype = prototipoPadre.prototype
        prototipoHijo.prototype = new noop
        prototipoHijo.prototype.constructor = prototipoHijo
    }

// Para invocar la herencia
heredaDe(Desarrollador, Persona);

// Creo una función 'saludar' para el prototipo de Persona
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
}

// Creo una función para ver si la Persona es alta -- Ejercicio V.23
Persona.prototype.soyAlto = function(){
    (this.altura > 1.80) ? console.log(`Yo, ${this.nombre}, soy alto.`) : console.log(`Yo, ${this.nombre}, no soy alto.`); 
    }

// Creo un objeto nuevo usando el prototipo de persona y uso las funciónes
var tomas = new Persona('Tomas', 'Basile', 1.70);
tomas.saludar();
tomas.soyAlto();

var jordan = new Persona('Michael', 'Jordan', 2.00);
jordan.soyAlto(); 

var gonzalo = new Desarrollador('Gonzalo', 'Bertinat', 1.75);
gonzalo.saludar();
