export async function consultarPersonajes(url) {
    const urlApi = "https://rickandmortyapi.com/api/character";
    
    let respApiObjeto = await fetch(url|| urlApi);
    let respApiParJson = await respApiObjeto.json();
    let next= respApiParJson.info.next;
    let previus= respApiParJson.info.prev;

    
    let arrayPersonajesOri=[];
    respApiParJson.results.forEach(personajesDatos => {
        //  console.log("id:",personajesDatos.id,"nombre:",personajesDatos.name,"specie",personajesDatos.species,"genero:",personajesDatos.gender);
        let datosPersObjeto={
            id:personajesDatos.id,
            name:personajesDatos.name,
            image:personajesDatos.image,
            specie:personajesDatos.species,
            gender:personajesDatos.gender,
            status:personajesDatos.status,
            origin: personajesDatos.origin.name,
        }
        arrayPersonajesOri.push(datosPersObjeto);
    
        });
    return {
        previous:previus,
        next: next,
        array:arrayPersonajesOri
    } 
}

export async function buscarPersonajexNombre(personajeInputVal){
    let arrayPerEncontrados=[];
    const urlApi = `https://rickandmortyapi.com/api/character/?name=${personajeInputVal}`;
    let respApiObjeto = await fetch(urlApi);
    let respApiParJson = await respApiObjeto.json();
    respApiParJson.results.forEach(personajesEncontrados =>{

       let personajebuscados={
        image:personajesEncontrados.image,
        id:personajesEncontrados.id,
        name:personajesEncontrados.name,
        create:personajesEncontrados.created,
        origin: personajesEncontrados.origin.name
    }
    arrayPerEncontrados.push(personajebuscados);
    });
    console.log(arrayPerEncontrados);
   return arrayPerEncontrados;
}

