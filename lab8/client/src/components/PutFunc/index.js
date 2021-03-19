import Axios from 'axios';
import {useState} from 'react';

function PutFunc() {

    const [additionalNames, setAdditionalNames] = useState("");
  
    const putPerson = (name) => {
      Axios.put("http://localhost:45030/people/" + name)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error " + error);
      });
    };
  
    return (
      <div className="App">
        <input type="text" onChange={(event) => setAdditionalNames(event.target.value)} />
        <button onClick={() => putPerson(additionalNames)}>Add Name!</button> <br/>
      </div>
    );
  }

export default PutFunc;