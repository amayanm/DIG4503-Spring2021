import './App.css';
import React from 'react';
import PutFunction from './components/PutFunction';
import GetFunction from './components/GetFunction';
import PatchFunction from './components/PatchFunction';
import DeleteFunction from './components/DeleteFunction';

function App() {
  return (
    <div>
      <h1>Welcome to the Disney's Pixar Category of Mflix!</h1>
      <h3>Browse through the movies to see what we have to offer</h3>
      <h4>Current Titles</h4>
        <ul>
          <li>Cars</li>
          <li>Ratatouille</li>
          <li>Toy Story 1, 2, 3</li>
          <li>Finding Nemo</li>
          <li>Inside Out</li>
          <li>Brave</li>
        </ul>
        <GetFunction />
      <hr/>
      <h3>Want to suggest a movie to add to Mflix?</h3>
      <h3>Add your suggestion below!</h3>
        <PutFunction />
        <PatchFunction />
        <DeleteFunction />
    </div>
  );
}

export default App;
