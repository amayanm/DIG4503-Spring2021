import React from 'react';
import Market from '../Market';
import Wanted from '../Wanted';
import cakeImg from '../../images/cakeImg.jpg';
import cookieImg from '../../images/cookieImg.jpg';
import pieImg from '../../images/pieImg.jpg';

const cake = [
    "Red Velvet", <br/>,
    "Chocolate",<br/>,
    "Vanilla",<br/>,
    "Marble",<br />
  ];
const cookies = [
    "Chocolate Chip",<br/>,
    "Peanut Butter",<br/>,
    "Cookies and Cream",<br/>,
    "Sugar Cookie",<br />
];
const pie= [
    "Apple",<br/>,
    "Pecan",<br/>,
    "Key Lime",<br/>,
    "Chocolate",<br />
  ];  

class BakeryItem extends React.Component{
    constructor(props){
        super(props);
      
    }
    render(){
      const bStyle = {
        color: "Coral",
        padding: "10px",
        fontFamily: "Arial"
      }
      const pStyle = {
        padding: "10px",
        fontFamily: "Arial"
      }
      
    return(
      <div> 
          <h2 style={bStyle}>Welcome to the Bakery!</h2>
          <h3 style={bStyle}>Cakes</h3>
            <img src={cakeImg} alt="cake" width="150px" /><p style={pStyle}>{cake}<Market /></p>
          <h3 style={bStyle}>Cookies</h3>
            <img src={cookieImg} alt="cake" width="150px" /><p style={pStyle}>{cookies}<Market /></p>
          <h3 style={bStyle}>Pies</h3>
            <img src={pieImg} alt="cake" width="150px" /><p style={pStyle}>{pie}<Market /></p>

          <h3 style={bStyle}>Want a new Item?</h3>
          <p style={pStyle}>Type in your request below</p>
          <Wanted />
      </div>
    )
  }
}


export default BakeryItem;