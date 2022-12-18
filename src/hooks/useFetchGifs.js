import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {//Se recibe como parametro la categoria

    const [images, setImages] = useState([]);

    //Permite hacer un snapshots para mostrar el mensage que se esta
    //cargando la imagen
    const [isLoading, setIsLoading] = useState(true);//Se usa el isloading para saber 
                                                     //si la imagen se esta cargando o no
                                                     //se esta cargando

    //Creacion de la funcion getImages la cual permite
    //que la imagen no se dispare x cantidad de veces
    const getImages = async() => {//Esta funcion flecha si puede ser asincrona, y como es asincrona
                                  //lo podemos hacer de la siguiente manera

         const newImages = await getGifs( category );//Dentro de los parentesis se envia la categoria
         
         //Ahora se puede mandar a llamar el setImages que se habia
         //creado en la funcion flecha useEffect()
         setImages(newImages);

         //Se manda a llamar el setIsloading que se en cuentra en 
         //const [isloading, setIsLoading] = useState(true); para saber
         //si la imagen se esta cargando o no se esta cargando
         setIsLoading(false);//se le envia como parametro el booleno false poque ya 
                             //anteriormente se habia cargado por primera vez la imagen


    }

    useEffect( () => {

        //Se manda a llamar la funcion getGifs inmediatamente
        //el componente se haya creado y se envia como parametro la categoria
          // getGifs( category );
        //Se manda a llamar la funcion getImages la cual permite
        //que la imagen no se dispare x cangtidad de veces
        getImages();


    }, [] )//Dentro de los parentesis se van a tener 2 argumentos 
        //1. Primer Argumento: Se tiene una funcion de flecha en la cual se
        //tiene el codigo que queremos e¡jecutar en este caso nuestro getGifs( category );
        //2. Segundo Argumento: dentro de llaves cuadradaas [ ] se debe definir
        //un arreglo de mis dependencias, si se dejan las dependencias vacias [ ]
        //significa que este Hook solo se va a disparar-ejecutar la primera vez
        //que se crea y se construye mi componente

    return {
   
    //images: images[],// cuando se tiene una variable con el mismo nombre del
                       //objeto o arreglo que se va a retornar se deja
                       //nada mas el nombre de la variable como se puestra+
                       //en la siguiente instruccion
    images,//Es la imagen que se retorna
    isLoading

    }
}
