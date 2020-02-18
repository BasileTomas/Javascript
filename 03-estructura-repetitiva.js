//Estructuras repetitivas
var persona = {
    nombre: 'Tomas',
    apellido: 'Basile',
    edad: 28,
    peso: 60
}

const VAR_PESO = 0.3;
const DIAS_ANIO = 365;

//Arrow functions
const aumentarPeso = (persona) => persona.peso += VAR_PESO;
const disminuirPeso = (persona) => persona.peso -= VAR_PESO;
const comeMucho = () => Math.random() < 0.3;
const haceEjercicio = () => Math.random() < 0.4;

function simulacionDietaPersona(persona){
    let objetivo = persona.peso - 5;
    let dias = 0;
    //Estructura repetitiva
    while(persona.peso > objetivo){
        if(comeMucho()){
            aumentarPeso(persona)
        }
        if(haceEjercicio()){
            disminuirPeso(persona)
        }
        dias += 1;
    }
    console.log(`Pasaron ${dias} días hasta que ${persona.nombre} adelgazo 3kg.`)    
    console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)} Kg.`)
}

//Prompt y switch
var signo = prompt('¿Tu signo qué opina sobre la dieta? Dime de que signo eres:');
function dietaSigno(signo){
    switch(signo){
        case 'aries':
            console.log('No cumpliras tus objetivos.')
            break
        case'cancer':
            console.log('Cumpliras con tus objetivos.')
            break
        default:
            console.log('Tu signo no tiene nada que ver con tu vida.')        
    }
}

dietaSigno(signo);
simulacionDietaPersona(persona);

