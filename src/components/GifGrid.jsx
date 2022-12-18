import { useEffect, useState} from "react"
//import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';



//Creacion del funtional component - creacion del componente
export const GifGrid = ({ category }) => {//Dentro de los parentesis de recibe como propertie-props la categoria
                              //Se destructura el props para obtener la categoria

    //Proceso para llamar el Custom Hook useFetchGifs poderlo  destructurar
    //{ images, isloding } y obterner las propiedades que necesitemos
    const { images, isLoading }  = useFetchGifs( category );//Se prodcede a destructurar un objeto 
                        //El cual es retornado de un Custom Hook
                        //Al destructurar el objeto se puede obtener el images, el isloading
                        //un hook siempre debe iniciar con la palabra use
                        //Se le envia como parametro la categoria - category 
                        //Todo el codigo que se encontraba anterior mente el cual se
                        //copio y pego dentro de una Custom Hook useFetchGifs queda reducida
                        // a esta linea de codigo.

    //console.log({ images, isLoading });
    //onsole.log({ isLoading });

    /* EL CODIGO QUE AQUI IBA SE PEGO EN EL Custom Hook useFetcGifs.js */
  
  return (

    <>
    
       <h3>{ category }</h3>

       {/* Proceso para mostrar el mensaje Cargando... */}
       {
          /* PRIMERA FORMA */
          //Se pregunta si el isLoading esta en true, entonces se 
          //puede utilizar un terniario ? y a continuacion los
          //parentesis () los cuales indican que se va a retornar algo
          //isLoading
          //? ( <h2>Cargando...</h2>)
          //: null //caso contrario se retorna un null

          /* SEGUNDA FORMA */
          //Se pregunta si el isLoading esta en true, entonces se va
          //a ejecutar && la segunda parte de la istruccion (<h2>Cargando...</h2>)
          //Funciona exactamente igual a la primera Forma si no que esta es mas facil
          //de interpretar
          isLoading && ( <h2>Cargando...</h2> )//Cuando el isLoading esta en false
                                               //entonces ya no regresa y ya no se 
                                               //continua con el resto de las instrucciones

          /* TERCERA FORMA */   
          //Se puede acrear un componente que se llame LoadingMessage en el cual se le 
          //envia el isLoading que seria igual = a { isloading }, y el componente 
          //isLoading internamente hace la logica necesaria para mostrarse manera condicional
          // o no                                 

       }

       <div className="card-grid">

       {
             images.map( ( image ) => (//Se destructura el objeto image para
                                  //obtener el id y el title

                //<li key={ image.id }>{ image.title }</li>
                //Se hace el llamado al componente GifItem
                <GifItem key={ image.id }
                         { ...image }/>
             ))

          }


       </div>
      
    
    
    </>
    
  )
}
