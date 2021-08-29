import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function AddMovies() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');


    const genreHandler = [{value: 0, label: "Select An Option"}, 
    {value: 1, label: "Adventure"}, 
    {value: 2, label: "Animated"}, 
    {value: 3, label: "Biographical"}, 
    {value: 4, label: "Comedy"}, 
    {value: 5, label: "Disaster"}, 
    {value: 6, label: "Drama"}, 
    {value: 7, label: "Epic"}, 
    {value: 8, label: "Fantasy"}, 
    {value: 9, label: "Musical"}, 
    {value: 10, label: "Romantic"}, 
    {value: 11, label: "Science Fiction"}, 
    {value: 12, label: "Space-Opera"}, 
    {value: 13, label: "Superhero"}];
    
    const cancelButton = () => { 
        history.push('/');
    };

    const submitButton = () => { 
        if (title == "" || description == "" || url == "" || genre == 0) { 
            alert('Please fill in all inputs');
            return false;
        };
        dispatch({ 
            type: "ADD_NEW_MOVIE",
            payload: { title: title, description: description, poster: url, genre_id: genre }
        });
        cancelButton(); 
        history.push('/');
        
    };



return(
    <section>
        <form action="submit">
            <h2>Add Movie</h2>
            <div className="addform" style={{width: '550px'}}>
                        <TextField 
                        label="Movie Title" 
                        variant="outlined" 
                        style={{width: "100%"}} 
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)}/><br /><br />

                        <TextField textarea
                        label="Movie Description" 
                        style={{width: "100%"}} 
                        multiline maxRows={6} 
                        variant="outlined" 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}/><br /><br />

                        <TextField 
                        label="Movie Poster URL" 
                        style={{width: "100%"}} 
                        variant="outlined" 
                        value={url} 
                        onChange={(event) => setUrl('./images/Samson-Malaysia-Poster.jpg')}/><br /><br />

                        <TextField select label="Genre" style={{width: "100%"}} SelectProps={{native: true}} variant="outlined" onChange={(event) => setGenre(event.target.value)}>
                            {genreHandler.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField><br /><br />

                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={cancelButton}>Cancel</Button>

                        &nbsp;

                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={submitButton}>Submit</Button> 

                    </div>
        </form>
    </section>
)
}


export default AddMovies;