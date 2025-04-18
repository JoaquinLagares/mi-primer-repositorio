function obtenerDatos(exitosa) {
    return new Promise ((resolve,reject)=> {
        setTimeout(()=>{
            if(exitosa){
                resolve({
                    nombre: "Juan",
                    edad: 30,
                    ocupacion: "Desarrollador"
                })
            }else{
                reject("Error: no se pudieron obtener los datos");
            }
        },2000)
    })
}
console.log(obtenerDatos(true)
    .then(datos => 
        console.log("Datos recibidos:", datos)
    )
    .catch(error=>{
        console.error("Ocurrio un error:", error)
    }));


async function obtenerPersonaje(id){
        let respuesta ={};
        try{
            const rest = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await rest.json();
            respuesta [data.name]= {
                id: data.id,
                gender: data.gender
            }
        }catch(error){
            console.log("Error: ", error);
        }
    
        return respuesta;
    }
    obtenerPersonaje(1).then(result => {
        console.log("Resultado final:", result);
      });