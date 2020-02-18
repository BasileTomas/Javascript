// Se aclara de donde se utiliza la API
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain: true};

// Se coloca el .fail() como si fuera un catch
function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {    
        const nameUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(nameUrl, OPTS, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

// Se coloca lo que retornaria el catch en caso que fallara algo
function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

// Hago un array con los id de los personajes que deseo traer
var ids = [1, 2, 3, 4, 5, 6, 7];

// Recorro el array con el map e imprimo el Json con toda la información,
// tener en cuenta que esta tarea es sincronica 
var promesas = ids.map((id) => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

// Lo mismo que en el caso anterior pero las tareas se realizan asincronicamente
async function obtener_personaje(){
    try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
    } catch (id) {
        onError(id);
    }    
}

// Invoco la funcion asincronica
obtener_personaje();