import { useDispatch, useSelector } from "react-redux";
import MovieDetails from '../MovieDetails/MovieDetails';

function Details() {
    // const dispatch = useDispatch();
    // const movieUrl = useLocation();
    // console.log('Wheres my movie', movieUrl.pathname)

    const details = useSelector(store => store.details);
    console.log('details', details)


    return(
        <>
        {details.map((movie, i) => (
            <div key={i}>
                <MovieDetails movie={movie} />
            </div>
        ))}
        </>

    )
} 
export default Details;