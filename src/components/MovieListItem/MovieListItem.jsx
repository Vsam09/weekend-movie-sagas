import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'

function MovieListItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const posterClick = () => {
        console.log(movie.id)

        dispatch({
            type: 'GET_DETAILS',
            payload: movie.id
        })
        history.push('/details')
    }

    return(
        <div>
        <h3>{movie.title}</h3>
        <img onClick={posterClick} src={movie.poster} alt={movie.title}/>
        </div>
    )
}
export default MovieListItem;