import { useState } from "react";
import image from '../src/image.jpg'

function App() {

  const [movies, setMovies] = useState([]);

  const sciFi = [
    {
      movieName : "Avengers",
      moiveRating : "9.5"
    },
    {
      movieName : "Inception",
      moiveRating : "9.1"
    },
    {
      movieName: "Back To The Future",
      moiveRating: "9.1"
    }
  ]

  const loveStory = [
    {
      movieName : "Wall-e",
      moiveRating : "9.5"
    },
    {
      movieName : "Warm bodies",
      moiveRating : "9.1"
    },
    {
      movieName: "Back To The Future",
      moiveRating: "9.1"
    }
  ]

  const animation = [
    {
      movieName : "Kung Fu Panda",
      moiveRating : "9.5"
    },
    {
      movieName : "Horton hears A Who",
      moiveRating : "9.1"
    },
    {
      movieName: "Wrack it Ralph",
      moiveRating: "9.1"
    }
  ]

  const biography = [
    {
      movieName : "The Founder",
      moiveRating : "9.5"
    },
    {
      movieName : "Immitaion Game",
      moiveRating : "9.1"
    },
    {
      movieName: "Milka Singh",
      moiveRating: "9.1"
    }
  ]

  const comedy = [
    {
      movieName : "Lage raho Munna Bhai",
      moiveRating : "9.5"
    },
    {
      movieName : "Bhagam Bhag",
      moiveRating : "9.1"
    },
    {
      movieName: "Lootcase",
      moiveRating: "9.1"
    }
  ]

  // console.log(sciFi[0].movieName);

  return (
    <div className="App">
        <header>
       <h2>Favourite Movies List</h2>
       <p>Check Out My Favourite List Of Movies In Each Genre</p>
       </header>

      <button onClick={()=> setMovies(sciFi)}>Sci-fi</button>
      <button onClick={()=> setMovies(loveStory)}>Love Story</button>
      <button onClick={()=> setMovies(animation)}>Animation</button>
      <button onClick={()=> setMovies(biography)}>Biography</button>
      <button onClick={()=> setMovies(comedy)}>Comedy</button>

      <hr />
    
      <ul>
      {movies.map((movie) =>(
            <li>
            <img className="moviePoster" src={image} alt="Not Loaded" />

            <div className="movieName"> {movie.movieName}</div>
            <div className="movieRating">IMDB: {movie.moiveRating}</div>
            </li>    
             ))}
      </ul>
    </div>
  );
}

export default App;
