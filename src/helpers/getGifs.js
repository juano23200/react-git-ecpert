
//Creacion de funcion para obtener imagenes 
//Como la funcion la voy a usar, la voy a llamr desde otros archivos
//se debe exportar
export const getGifs = async( category ) => {//Se recibe como parametro la categoria enviada desde  getGifs( category );
    //Por lo tanto ahora la funcion puede hacer un return de los Gifs
    

//Copiamos el codigo que verificamos su funcionamiento en la aplicacion Postman
//y lo asignamos a la variable const url, dentro de la llaves { } se va a colocar
//la categoria que vamos a buscar    
       const url = `https://api.giphy.com/v1/gifs/search?api_key=CI05QoRJeHDQ0yujoIRLkuV8DvTk35gM&q=Goku=${ category }&limit=10`

//Se realiza la peticion HTTP
       const resp = await fetch ( url );

//Se destructura la data {data} la cual biene de 
//await del resp.json();
       const { data } = await resp.json();

//Creacion de una constante para almacenar cierta
//informacion de la data de una imagen que  se
//quiere mostrar, se puede utilizar el .map
//porque se que la data es un arreglo 
        const gifs = data.map( img => ({//Retorna un objeto con las propiedades que nos
                                        //interesan 

                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url


        }))

//Se realiza un console.log de la respuesta para ver
//que tenemos almacenado ahi
//console.log(resp);
//console.log(data);
      //console.log(gifs);

    //Reorna los gifs
    return gifs;
}