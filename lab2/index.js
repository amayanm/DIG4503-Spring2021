import Fetch from "./Fetch.js";

const f= new Fetch();
f.fetch();

const f2= new Fetch();
f2.fetch();



// Did not work:
// class Wrong extends Fetch {
//     constructor() {
//         super("https://pokeapi.co/api/v2/pokemon/260' + null","#FFC1E6");
//     }
// }
// const f2= new Wrong();
// f2.fetch();

// const f= new Fetch("https://pokeapi.co/api/v2/pokemon/260' + null","#FFC1E6");
// f.fetch();