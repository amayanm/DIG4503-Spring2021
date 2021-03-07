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
                <button onClick={() => {
                    const items = this.state.items;
                    items.push(<MarketItem count={items.length} key={items.length} />);
                    this.setState({items: items});
                }}>Add to cart</button>
            <div>{
                this.state.items.map(element =>{
                    return element
                })
            }</div> 
            </div>
        )
    }
}

export default Market;