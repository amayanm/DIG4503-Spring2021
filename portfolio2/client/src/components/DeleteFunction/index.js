import Axios from 'axios';
import { useState } from 'react';

function DeleteFunction(){

    const [deleteMovie, setDeleteMovie] = useState("");

    const delMovie = (title) => {
        Axios.delete("http://localhost:45030/movie/" + title)
        .then(response =>{
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <p>Type in the title to delete your added movie</p>
            <input type="text" placeholder="e.g. Onward" onChange={(event) => setDeleteMovie(event.target.value)} />
            <button onClick={() => delMovie(deleteMovie)}>Delete your Movie</button>
        </div>
    );
}

export default DeleteFunction;