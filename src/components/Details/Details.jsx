import { useLocation, useParams } from "react-router-dom";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";

function Details() {
    const dispatch = useDispatch();
    // const movieUrl = useLocation();
    // console.log('Wheres my movie', movieUrl.pathname)

    const details = useSelector(store => store.details);
    console.log('details', details)

    useEffect(() => {
        console.log('useEffect')
        dispatch({ 
            type: 'GET_DETAILS',
            payload: 1
         });
    }, []);

    return(
        <>
        <h1>Details</h1>
        {details.map((movie, i) => (
            <div key={i}>
                {/* Movie:{movie.poster}  */}
                Description:{movie.description} 
                {/* Genres: {movie.genres}  */}

            </div>
        ))}
        </>

    )
} 
export default Details;