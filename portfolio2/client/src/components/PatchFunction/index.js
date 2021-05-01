import Axios from 'axios';
import { useState } from 'react';

function PatchFunction(){

    const [updateTitle, setUpdateTitle] = useState("");
    const [updateYear, setUpdateYear] = useState("");
    const [updatePlot, setUpdatePlot] = useState("");

    const patchMovie = (title, year, plot) => {
        Axios.patch("http://localhost:45030/movie/" + title, {"year": year, "plot": plot})
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <p>Need to fix the movie you entered? Enter the fields below</p>
            <input type="text" placeholder="Enter same Movie Title" onChange={(event) => setUpdateTitle(event.target.value)} /><br/>
            <input type="text" placeholder="Fix Release Year" onChange={(event) => setUpdateYear(event.target.value)} /><br/>
            <input type="text" placeholder="Edit Plot" onChange={(event) => setUpdatePlot(event.target.value)} /><br/>
            <button onClick={() => patchMovie(updateTitle, updateYear, updatePlot)}>Update movie</button>
        </div>
    );
}

export default PatchFunction;