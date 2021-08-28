import { useHistory } from "react-router-dom";

function movieDetails({movie}) {
    const history = useHistory();

    const goBack = () => {
        history.push('/')
    };

    return(

        <div>
        <h1>{movie.title}</h1>
        <p><button onClick={goBack}>Back</button></p>
        <img src= {movie.poster} />
        <p>Genres: {movie.genres} </p> 
        <p>Description: {movie.description}</p>
        </div>
    )
}
export default movieDetails;