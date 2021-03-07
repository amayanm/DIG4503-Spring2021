import React, { useState } from 'react';

function Wanted() {

    const [wanted, setWanted] = useState("");
    return (
      <div>
           <input type="text" onChange={(event) => {
              setWanted(event.target.value);
          }}/>
              <p>Wanted Item: {wanted}</p>   
      </div>
    );
  }

export default Wanted;