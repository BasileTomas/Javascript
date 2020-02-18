// Se aclara de donde se utiliza la API
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain: true};

// Se coloca el .fail() como si fuera un catch
function obtenerPersonaje(id, callback){
    const nameUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(nameUrl, OPTS, callback)
    .fail(() => {
        console.log(`Susedio un error, no se pudo cargar el personaje ${id}.`)
    })
}

// Esto produce un efecto de respuesta en cascada
obtenerPersonaje(1, function(personaje){
    console.log(`Este es el personaje llamado ${personaje.name}`)
    obtenerPersonaje(2, function(personaje){
        console.log(`Este es el personaje llamado ${personaje.name}`)
        obtenerPersonaje(3, function(personaje){
            console.log(`Este es el personaje llamado ${personaje.name}`)
        })
    })
})