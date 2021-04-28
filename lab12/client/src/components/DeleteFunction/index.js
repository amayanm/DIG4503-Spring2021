import Axios from 'axios';
import { useState } from 'react';

function DeleteFunction(){

    const [deleteBook, setDeleteBook] = useState("");

    const getBooks = (ISBN) => {
        Axios.delete("http://localhost:45030/books/" + ISBN)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <input type="text" onChange={(event) => setDeleteBook(event.target.value)} />
            <button onClick={() => getBooks(deleteBook)}>Delete Book</button>
            <p>Use the ISBN number to delete your book!</p>
        </div>
    );
}

export default DeleteFunction;