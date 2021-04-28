import Axios from 'axios';
import { useState } from 'react';

function PutFunction(){

    const [additionalBook, setAdditionalBook] = useState("");

    const putBook = (ISBN) => {
        Axios.put("http://localhost:45030/books/" + ISBN, {title: "The Haunting of Hill House", author: "Shirley Jackson", description: "Horror Book"})
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <input type="text" onChange={(event) => setAdditionalBook(event.target.value)} />
            <button onClick={() => putBook(additionalBook)}>Add in the book ISBN number!</button>
            <p>For "Haunting of Hill House" type in the ISBN number '9780143134770'</p>
        </div>
    );
}

export default PutFunction;