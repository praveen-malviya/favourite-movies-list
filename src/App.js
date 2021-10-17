import { useState } from "react";

function App() {

  const [movies, setMovies] = useState([]);

  const sciFi = [
    {
      movieName : "Avengers",
      moiveRating : "10",
      moviePoster : "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5211/875211-v",
      movieDetails : "Marvel's The Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    },
    {
      movieName : "Inception",
      moiveRating : "8.8",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      movieDetails : "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife."
    },
    {
      movieName: "Back To The Future",
      moiveRating: "8.5",
      moviePoster : "https://i.guim.co.uk/img/media/21d831ddc3d5e48f405ba4ab93ca7b7953d11019/0_281_3508_2105/master/3508.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=470959356c80fd19634c2858b9b6d874",
      movieDetails: "Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present."
    }
  ]

  const loveStory = [
    {
      movieName : "Wall-e",
      moiveRating : "8.4",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
      movieDetails : "A machine responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind."
    },
    {
      movieName : "Warm bodies",
      moiveRating : "6.8",
      moviePoster : "http://gonewiththetwins.com/new/wp-content/uploads/2013/08/warmbodies_newg.jpg",
      movieDetails : "At a scavenger party, R, a zombie, meets Julie and feels strangely protective of her. As he begins to regain his human tendencies, their love is threatened by the very difference of their existence."
    },
    {
      movieName: "Eternal Sunshine Of The Spotless Mind",
      moiveRating: "8.3",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg",
      movieDetails : "Joel and Clementine begin a relationship after a train journey together. However, having had their memories clinically erased, they do not remember their tumultuous past."
    }
  ]

  const animation = [
    {
      movieName : "Kung Fu Panda",
      moiveRating : "7.6",
      moviePoster : "https://www.enjpg.com/img/2020/kung-fu-panda-8.jpg",
      movieDetails : "When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace."
    },
    {
      movieName : "Horton hears A Who",
      moiveRating : "6.8",
      moviePoster : "https://www.magicalquote.com/wp-content/uploads/2020/02/A-persons-a-person-no-matter-how-small.jpg",
      movieDetails : "Horton, an elephant, must dodge his pesky neighbours and find a safe place to keep the dust speck, which contains a microscopic community of creatures known as The Whos."
    },
    {
      movieName: "Wreck-It Ralph",
      moiveRating: "7.7",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BZjU2NjcxZDgtYTI2Yi00YTc4LWEyMDEtYmZiMGQ1MGVlZDgzXkEyXkFqcGdeQXVyNjkyMDAyNjc@._V1_.jpg",
      movieDetails : "Ralph is tired of playing the role of a bad guy and embarks on a journey to become a video game hero. But Ralph accidentally lets loose a deadly enemy that threatens the entire arcade."
    }
  ]

  const biography = [
    {
      movieName : "The Founder",
      moiveRating : "7.2",
      moviePoster : "https://corporatebytes.in/wp-content/uploads/The-Founder-UK-Movie-Poster.jpg",
      movieDetails : "Ray, a salesman, meets the owners of McDonald's, a burger joint in Southern California. He realises the potential of the place and decides to make it the biggest restaurant business in the world."
    },
    {
      movieName : "Immitaion Game",
      moiveRating : "8",
      moviePoster : "https://wallpaperaccess.com/full/2512780.jpg",
      movieDetails : "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes."
    },
    {
      movieName: "Bhag Milkha Bhag",
      moiveRating: "8.2",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_.jpg",
      movieDetails : "Milkha Singh, an Indian athlete, overcomes many agonising obstacles in order to become a world champion, Olympian and one of India's most iconic athletes."
    }
  ]

  const comedy = [
    {
      movieName : "Lage raho Munna Bhai",
      moiveRating : "8",
      moviePoster : "https://boxofficeindia.co.in/sites/default/files/producer_anand_pandit_1.jpg",
      movieDetails : "A gangster hopelessly falls in love with a radio jockey but lies to her about being a true Gandhian. Although he ends up hurting her, he also undergoes a change and genuinely begins helping people."
    },
    {
      movieName : "Bhagam Bhag",
      moiveRating : "6.5",
      moviePoster : "https://m.media-amazon.com/images/M/MV5BYjU2ZGFiZjEtN2ZhOS00OTlmLTliOGMtOWM2NzQ2ZDI5M2U2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      movieDetails : "Champak, the owner of a theatre group, travels to London to organise a show along with Bunty and Babla, two of his group members. They soon find themselves embroiled in a murder they did not commit."
    },
    {
      movieName: "Lootcase",
      moiveRating: "7.6",
      moviePoster : "https://1.bp.blogspot.com/-wwZ-JPAis4E/Xvnt_zElcvI/AAAAAAABH4E/8jA1iOc4sPgxCoOUydh75hi2ldyX_Y46ACLcBGAsYHQ/s1600/Lootcase-Movie-Poster.jpg",
      movieDetails : "Nandan, a middle-class man, finds a suitcase full of money near his workplace and steals it. However, he is soon chased by a police officer, a notorious gangster and a corrupt politician."
    }
  ]

  // console.log(sciFi[0].movieName);

  return (
    <div className="App">
        <header>
       <h2>Favourite Movies List</h2>
       <h4>Check Out My Favourite List Of Movies In Each Genre</h4>
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
            <p className="movieDetails">{ movie.movieDetails }</p>
            </li>    
             ))}
      </ul>
    </div>
  );
}

export default App;
