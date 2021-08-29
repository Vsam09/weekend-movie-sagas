import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovies from '../AddMovies/AddMovies';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <nav>
          <Link to="addMovie">Add a Movie</Link>
        </nav>
                
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route exact path="/details">
          <Details />
        </Route>

        <Route exact path="/addMovie">
          <AddMovies />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
