

export const GifItem = ( { title, url } ) => {//Se destructura la image para obtener
                                       //el title  y la url

  //console.log({ title, url });

  return ( 
    
    <div className="card"> 

        <img src={ url } alt={ title } />
        <p>{ title }</p>

    </div>


  )
}
