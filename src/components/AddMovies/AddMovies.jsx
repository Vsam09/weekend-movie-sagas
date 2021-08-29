function AddMovies() {
    

    return(
        <div>
            <form>
                <input placeholder="Movie Title"/>
                <input placeholder="Add an Image"/>
                    <p>
                    <textarea placeholder="Add Movie Description"/>
                    <button>Choose Genre</button>
                    </p>
                <button>Add Movie</button>
            </form>
        </div>
    )
}
export default AddMovies;