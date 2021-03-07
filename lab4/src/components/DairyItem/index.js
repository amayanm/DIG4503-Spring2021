import React from 'react';
import Market from '../Market';
import milkImg from '../../images/milkImg.jpg';
import eggsImg from '../../images/eggsImg.png';
import yogurtImg from '../../images/yogurtImg.png';

class DairyItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item1:[
                "Milk"
            ],
            item2:[
                "Large Eggs"
            ],
            item3:[
                "Strawberry Yogurt"
            ]
        };
    }
    
    render(){
        const dStyle = {
            color: "Blue",
            padding: "10px",
            fontFamily: "Arial"
          }
        return(
            <div> 
                <h2 style={dStyle}>Welcome to Dairy!</h2>
                    <p style={dStyle}>{this.state.item1}</p><img src={milkImg} alt="cake" width="150px" />
                        <Market />
                    <p style={dStyle}>{this.state.item2}</p><img src={eggsImg} alt="cake" width="150px" />
                        <Market />
                    <p style={dStyle}>{this.state.item3}</p><img src={yogurtImg} alt="cake" width="150px" />
                        <Market />
            </div>
        )
    }
}

export default DairyItem;