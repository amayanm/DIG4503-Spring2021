import axios from 'axios';
import chalk from 'chalk';

class Fetch{
    constructor(pokemon, color){
        this.name = pokemon;
        this.color = color;
    }
    fetch(){
        axios('https://pokeapi.co/api/v2/pokemon/260')
            .then( (response) => {
                const pokemon = response.data;
                console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
            })
            .catch( (error) => {
                console.log(chalk.red("Error: " + error));
             });
        axios('https://pokeapi.co/api/v2/pokemon/260' + null)
            .then( (response) => {
                const pokemon = response.data;
                console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
            })
            .catch( (error) => {
                console.log(chalk.red("Error: " + error));
            });
    }
}

export default Fetch;



// Did not work:
// .then( (response) => {
//     const pokemon = response.data;
//     console.log(chalk.hex("This is a " + pokemon.name + " and its ID is " + pokemon.id)));
// })

