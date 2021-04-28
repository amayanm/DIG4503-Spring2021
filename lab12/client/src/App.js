import './App.css';
import React from 'react';
import PutFunction from './components/PutFunction';
import GetFunction from './components/GetFunction';
import DeleteFunction from './components/DeleteFunction';

function App() {
  return (
    <div>
      <PutFunction />
      <GetFunction />
      <DeleteFunction />
    </div>
  );
}

export default App;
