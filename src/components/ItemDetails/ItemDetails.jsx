function ItemDetails({movie}) {


    return(
        <div>
        <img src= {movie.movieposter} />
        <p>Genres: {movie.genres}</p> 
        <p>Description: {movie.moviedescription}</p>
        </div>
    )
}
export default ItemDetails;