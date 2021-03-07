import React from 'react';

function MarketItem(props){
    return (
        <div>
          <p>Item in Cart: {props.count}</p>
        </div>
    )  
}

export default MarketItem;