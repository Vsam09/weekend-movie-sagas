function movieDetails({movie}) {


    return(

        <div>
        <h1>{movie.title}</h1>   
         <img src= {movie.poster} />
          <p>Genres: {movie.genres} </p> 
        <p>Description: {movie.description}</p>
        </div>
    )
}
export default movieDetails;