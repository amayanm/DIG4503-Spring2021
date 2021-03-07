import React from 'react';
import BakeryItem from './components/BakeryItem';
import DairyItem from './components/DairyItem';
import './App.css';


const homeScreen = "home"
const dairyScreen = "dairy"
const bakeryScreen = "bakery"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentScreen: homeScreen, selectedItem: undefined}
  }
    render(){
       let product = [
         {prodType: "bakery", name: "Bakery", id: 1},
         {prodType: "dairy", name: "Dairy", id:2},   
       ]
       const hStyle = {
        color: "Purple",
        padding: "10px",
        fontFamily: "Arial"
      }
    let screen
       switch (this.state.currentScreen) {
         case homeScreen:
           screen =
              <>
                <h2 style={hStyle}>Welcome to the Market Place!</h2>
                <p style={hStyle}>Click an area to explore</p>
                <ul>
                  {product.map((prod, index) => 
                    prod.prodType === "bakery" ? (
                    <li key={index}>
                      <button onClick={() => this.setState({currentScreen:bakeryScreen, selectedItem: prod})}>{prod.name}</button>
                    </li>  
                   ) : (
                    <li key={index}>
                      <button onClick={() => this.setState({currentScreen:dairyScreen, selectedItem: prod})}>{prod.name}</button>
                    </li>  
                   )
                  )}
                </ul>
              </>
           break;
          case dairyScreen:
              screen = 
                <>
                <DairyItem {...this.state.selectedItem}></DairyItem>
                <button onClick={ () => this.setState({currentScreen:homeScreen})}>Back</button>
                </>
            break;
          case bakeryScreen:
              screen = 
                <>
                <BakeryItem {...this.state.selectedItem}></BakeryItem>
                <button onClick={ () => this.setState({currentScreen:homeScreen})}>Back</button>
                </>
            break;
       }
    return screen
    }
  }


export default App;