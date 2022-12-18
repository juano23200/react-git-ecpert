import { useState } from "react"

//Creacion del funtional component - creacion del componente
//export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {//Se destructura los props enviados desde
                                                   //<AddCategory setCategories={ setCategories } />
                                                   //contenida en el archivo GifExpertApp.jsx
                                                   //la cual se destructura y se obtiene el setCategories
                                                   //AddCategory = ({ setCategories })

//Asignacion de un estado para la etiqueta <input />
//Creacion del Hook de estado - usestate - destina un espacio en memoria para el manejo de las categorias
//usestate ->   UseStateSnippet
//const [first, setfirst] = useState(second)
  const [ inputValue, setInputValue ] = useState('One Punch')//Se asigna un nombre de inptValue el cual va a tener un arrego con un valor inicial
                                            //useState(' One Punch ') el cual sera el valor inicial que va a tener
                                            //el inputValue, y se le asigna un setInputValue para cunado desemos
                                            //agregae otro estado

  //Creacion de funcion de flecha para ser llamada desde el metodo onChange={ }
  const onInputChange = ({ target }) => {//Se recibe como parametro el evento enviado desde el input -> onChange
                                    //Se destructura el evento y se obtiene el target directamente {target}
     setInputValue(target.value);//event.target.value permite actualizar el input y mostrar lo 
                                 //que se esta escribiendo.
  }

  //Creacion de la funcion flecha para ser llamada dese el metodo onSubmit={ } que se encuentra desde el <form></form>
  const onSubmit = (event) => {

       event.preventDefault();//Permite que no se haga un refresh en el navegador
       //El inputValue es el que se tiene que enviar para actualizar la informacion en el padre
       //console.log(inputValue);

       //PERMITE INSERTAR LA NUEVA CATEGORIA AL INICIO DE LA LISTA
       
       //Se debe hacer la validación para que no se inserte nada cuando la caja del <input> se encuentra vacia,
       if( inputValue.trim().length <=1 ) return;//Esta condicion se va a cunplir solo si tenemos mas de
                                                //un caracter
       //setCategories( categories => [inputValue, ...categories] );//Permite insertar el nuevo inputValue, seguido de la destructuracion de
                                                                  //las categorias anteriores ...categorias
    
        onNewCategory( inputValue.trim() );/* Ahora en lugar de andar a llamar el setCategories que este 
                                              ya no es el que existe, por lo tanto no es el que se está 
                                              enviando;se manda a llamar el onNewCategory()
                                            Al cual como parámetro se le envia el valor del inputValue.trim()
                                            */                                                      

       //Proceso para limpiar la caja de texto al oprimir la tecla enter
       setInputValue(' ');
  }

  //ASIGNA EL FORMATO DEL INPUT PARA SER UTILIZADO AL MOMENTO DE SER LLAMADO-INSERTADO DESDE EL
  //ARCHIVO GifExpertApp.jsx                                         
  return (

  //<form onSubmit={ (event) => onSubmit(event)}>
  //La instruccion anterior es equivalente a la siguien, es exactamente lo mismo:
  <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }//Se hae el llamado al Hook-estado InputValue
        //onChange={ (event) => onInputChange(event) }//Se hace el llamado a la funcion onInputChange
                                  //Se debe implementar un evento el cual sera enviado como 
                                  //parametro al momento de llamar la funcion.
    
        onChange={ onInputChange }//Se hace el llamado a la funcion y envia la referencia
                                  //del evento                       
    />
   </form>
  )
}
