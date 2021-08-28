import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
// import {Link, useParams} from 'react-router-dom';
import MovieListItem from '../MovieListItem/MovieListItem';
function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => (
                    <MovieListItem movie = {movie}/>
                )

                )}
            </section>
        </main>

    );
}

export default MovieList;