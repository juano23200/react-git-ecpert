//Se importa el UseState para poderlo utilizar en el proyecto
import { useState } from "react"
import { AddCategory, GifGrid} from "./components";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  //Creacion del Hook de estado - usestate - destina un espacio en memoria para el manejo de las categorias
  //usestate ->   UseStateSnippet
 //const [first, setfirst] = useState(second)
 const [ categories, setCategories ] = useState([ 'One Punch' ]);
 //console.log(categories);

 /*------AGREGAR UNA NUEVA CATEGORIA---------- */
 //1. se crea una funcion de flecha
 const onAddCategory = ( newCategory ) => {//Se recibe el estring enviado y lo almacena en la variable
                                          //newCategory para asignarla en el setCategories


      if( categories.includes(newCategory) )   return; //se evalua si el newCategory existe- se 
                                                       //encuentra incluido dentro del arreglo categories                                  
      //console.log('Valorant');
      //setCategories([ ' Hola Mundo ' ]);//setCategories permite hacer el cambio de categorias
      //setCategories([ ...categories, 'Valorant' ]);//operador ... permite hacer una copia de las categorias
                                                 //a continuacion se coloca el nombre de la nueva categoria
      //setCategories([ 'Valorant', ...categories ]);//Permite agregar la categoria al inicio
      //En vez del valorant se envia el newCategory que fue el parametro que se envio desde el metodo
      //onNewCategory del <AddCategory  />
      setCategories([ newCategory, ...categories ]);
}

  return (

    <>
        {/* -------PARTES DE UN COMPONENTE------------ */}


      {/* 1. Primero se tiene el titulo  */}
       <h1>GifExpertApp</h1>

       {/* 2.	Segundo tenemos un Input   */}

       {/* Se hace el llamado al componente AddCategory para poder mostrarlo en la pagina */}
       {/* PRIMER METODO */}
       {/* <AddCategory setCategories={ setCategories } /> //En nuestro caso se enviara una función la cual
                                                         se llame onAddCategory o setCategories o le podemos
                                                        asignar el nombre que deseemos en la cual dentro de
                                                        las llaves { } se enviara directamente la referencia
                                                        a la función { setCategories}, es decir setCategories
                                                        es una propiedad del componente <AddCategory /> ahora,
                                                        el cual va a recibir esa función */}

       {/* SEGUNDO METODO */}
       {/* Cuando la variable lleva la palabra on al inicio es porque se esta emitiendo algo, es algo muy comun en los eventos, no es obligatorio
           pero es muy comun;  ese evento  es el que se envia como parameto a la funcion onAddCategory */}
       <AddCategory 
  
          onNewCategory = { (event) => onAddCategory( event )} 

       />

       {/* 3.	Tercero se tiene un listado de Items-Gifs y dentro 
       de este listado de Gifs se tiene un Gif Item   */}
        
      {/* <button onClick={ onAddCategory }>Agregar</button> //Al dar clic sobre el boton se hace el llamado a
                                                            la duncion onAddCategory()*/}

       {/* <ol> //Permite crear una lista numerada */}

           {
             categories.map( ( category ) => (//Lo que hace esta funcion es que al momento de ser llamada
                                            //va a retornar como parametro el objeto <li></li> o por su defecto
                                            //retorna el objeto <div></div>
                    //return <li key={ category }>{ category }</li>
                    //return <div key={ category }>
                                //<h3>{ category }</h3>
                                //<li>{ category }</li>
                                //</div>

                  <GifGrid key={ category }
                           category={ category }/>
             ))

           }

       {/* </ol> */}

       {/* 3.1	Gif Item  */}

    </>
    
  )
}



