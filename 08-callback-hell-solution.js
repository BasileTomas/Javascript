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

// De este modo se resuelve el callback hell
obtenerPersonaje(1)
    .then(personaje1 => {
        console.log(`Este es el 1° personaje llamado ${personaje1.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`Este es el 2° personaje llamado ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje3 => {
        console.log(`Este es el 3° personaje llamado ${personaje3.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        console.log(`Este es el 4° personaje llamado ${personaje4.name}`)
    })
    .catch(onError)
    
    
     
