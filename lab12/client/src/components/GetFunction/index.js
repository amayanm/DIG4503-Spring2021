import Axios from 'axios';
import { useState } from 'react';


function GetFunction(){
    
    const [searchBooks, setSearchBooks] = useState("");

    const getBooks = (ISBN) => {
        Axios.get("http://localhost:45030/books/" + ISBN)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <input type="text" onChange={(event) => setSearchBooks(event.target.value)} />
            <button onClick={() => getBooks(searchBooks)}>Search Books!</button>
            <p>Use the ISBN number to search the book you want!</p>
        </div>
    );
}

export default GetFunction;