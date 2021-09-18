import { useState } from "react";

function App() {

  const [movies, setMovies] = useState([]);

  const sciFi = [
    {
      movieName : "Avengers",
      moiveRating : "10",
      moviePoster : "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5211/875211-v"
    },
    {
      movieName : "Inception",
      moiveRating : "8.8",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      movieName: "Back To The Future",
      moiveRating: "8.5",
      moviePoster : "https://i.guim.co.uk/img/media/21d831ddc3d5e48f405ba4ab93ca7b7953d11019/0_281_3508_2105/master/3508.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=470959356c80fd19634c2858b9b6d874"
    }
  ]

  const loveStory = [
    {
      movieName : "Wall-e",
      moiveRating : "8.4",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg"
    },
    {
      movieName : "Warm bodies",
      moiveRating : "6.8",
      moviePoster : "http://gonewiththetwins.com/new/wp-content/uploads/2013/08/warmbodies_newg.jpg"
    },
    {
      movieName: "Eternal Sunshine Of The Spotless Mind",
      moiveRating: "8.3",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg"
    }
  ]

  const animation = [
    {
      movieName : "Kung Fu Panda",
      moiveRating : "7.6",
      moviePoster : "https://www.enjpg.com/img/2020/kung-fu-panda-8.jpg"
    },
    {
      movieName : "Horton hears A Who",
      moiveRating : "6.8",
      moviePoster : "https://www.magicalquote.com/wp-content/uploads/2020/02/A-persons-a-person-no-matter-how-small.jpg"
    },
    {
      movieName: "Wreck-It Ralph",
      moiveRating: "7.7",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BZjU2NjcxZDgtYTI2Yi00YTc4LWEyMDEtYmZiMGQ1MGVlZDgzXkEyXkFqcGdeQXVyNjkyMDAyNjc@._V1_.jpg"
    }
  ]

  const biography = [
    {
      movieName : "The Founder",
      moiveRating : "7.2",
      moviePoster : "https://corporatebytes.in/wp-content/uploads/The-Founder-UK-Movie-Poster.jpg"
    },
    {
      movieName : "Immitaion Game",
      moiveRating : "8",
      moviePoster : "https://wallpaperaccess.com/full/2512780.jpg"
    },
    {
      movieName: "Bhag Milkha Bhag",
      moiveRating: "8.2",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_.jpg"
    }
  ]

  const comedy = [
    {
      movieName : "Lage raho Munna Bhai",
      moiveRating : "8",
      moviePoster : "https://boxofficeindia.co.in/sites/default/files/producer_anand_pandit_1.jpg"
    },
    {
      movieName : "Bhagam Bhag",
      moiveRating : "6.5",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BYjU2ZGFiZjEtN2ZhOS00OTlmLTliOGMtOWM2NzQ2ZDI5M2U2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    },
    {
      movieName: "Lootcase",
      moiveRating: "7.6",
      moviePoster : "https://1.bp.blogspot.com/-wwZ-JPAis4E/Xvnt_zElcvI/AAAAAAABH4E/8jA1iOc4sPgxCoOUydh75hi2ldyX_Y46ACLcBGAsYHQ/s1600/Lootcase-Movie-Poster.jpg"
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
            <img className="moviePoster" src={movie.moviePoster} alt="Not Loaded" />

            <div className="movieName"> {movie.movieName}</div>
            <div className="movieRating">IMDB: {movie.moiveRating}</div>
            {/* <p>The Avengers are a fictional team of superheroes and the protagonists of the Marvel Cinematic Universe</p> */}
            </li>    
             ))}
      </ul>
    </div>
  );
}

export default App;
