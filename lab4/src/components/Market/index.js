import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[]
        };
    }
    
    render(){
        return(
            <div> 
                <h2>Click to add new item</h2>
                <button onClick={() => {
                    const items = this.state.items;
                    items.push(MarketItem); //tried (<MarketItem/>)
                    this.setState({items: items});
                }}>Click me!</button>
            <div>{
                this.state.items.map(function(item, index, array){
                    return <p key={index} count={array}>{item}</p>
                })
            }</div>
            </div>
        )
    }
}

export default Market;