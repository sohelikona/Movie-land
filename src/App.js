import { React, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';


//   112c597f


// const movie1 = {
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
// "Title": "Frozen",

// 'Type': "movie",
// 'Year': "2013",
// 'imdbID': "tt2294629",
// }



const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=112c597f'

const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([])


    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
        searchMovies(searchTerm);
        }
      };



    useEffect(() => {
        searchMovies()
    }, [])



    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

       setMovies(data.Search)
    }

   


    return (
        <div className="app">
            <h1>MovieLand </h1>

            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  onKeyDown={handleKeyPress}/>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
            </div>
        { movies?.length > 0 ? (
            
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
             </div>
            ) : (
                <div className="empty">
                <h2>No movies Found</h2>
                </div>
            )
            
        }



            
        </div>
    );
};

export default App;










































// 





// 





// 