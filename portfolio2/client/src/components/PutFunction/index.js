import Axios from 'axios';
import { useState } from 'react';

function PutFunction(){

    const [addTitle, setAddTitle] = useState("");
    const [addYear, setAddYear] = useState("");
    const [addPlot, setAddPlot] = useState("");

    const putMovie = (title, year, plot) => {
        Axios.put("http://localhost:45030/movie/" + title, {"year": year, "plot": plot})
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <p>Example: Onward, 2020, Elf brothers embark on a magical quest</p>
            <input type="text" placeholder="Movie Title" onChange={(event) => setAddTitle(event.target.value)} /><br/>
            <input type="text" placeholder="Release Year" onChange={(event) => setAddYear(event.target.value)} /><br/>
            <input type="text" placeholder="Breif Plot" onChange={(event) => setAddPlot(event.target.value)} /><br/>
            <button onClick={() => putMovie(addTitle, addYear, addPlot)}>Add new movie</button>
            <h2>You suggested we add: {addTitle}</h2>
        </div>
    );
}

export default PutFunction;