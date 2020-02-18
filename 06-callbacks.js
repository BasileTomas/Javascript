// Se aclara de donde se utiliza la API
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// Indica que el request se va a hacer en otra pagina
const opts = {crossDomain: true};
// Indica cual va a ser la respuesta
const onResponse = function(people) {
    console.log(`Sigue el camino de: ${people.name}.`)    
}

function nombrePersonaje(id){
    // Se pasa por parametro el id
    const nameUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(nameUrl, opts, onResponse);
}

var eleccion = () => {
    var signo = prompt('¿Prefieres el lado oscuro de la fuerza o ser un jedi?');
    (signo.toUpperCase() === 'JEDI') ? nombrePersonaje(1) : nombrePersonaje(4); 
}

console.log(`Joven padawan llego el momento de decidir`);
setTimeout(eleccion, 2000);
