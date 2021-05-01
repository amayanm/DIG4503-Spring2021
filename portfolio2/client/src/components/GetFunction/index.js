import Axios from 'axios';
import { useState } from 'react';

function GetFunction(){

    const [searchMovies, setSearchMovies] = useState("");

    const getMovie = (title) => {
        Axios.get("http://localhost:45030/movie/" + title)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        })
    };
    
    return (
        <div>
            <p>Type in the title to find out all about the movies</p>
            <p>Note: Movies will show in the console</p>
            <input type="text" placeholder="e.g. Cars" onChange={(event) => setSearchMovies(event.target.value)} />
            <button onClick={() => getMovie(searchMovies)}>Search Movie</button>
        </div>
    );
}

export default GetFunction;
