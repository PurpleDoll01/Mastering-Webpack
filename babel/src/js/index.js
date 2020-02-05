import '../css/index.css';
//esto usualmente no se puede hacer, es permitido gracias a webpack. 
import search from './search.js';
import render from './render.js';

const id = prompt('quien es ese pokemon');

search(id)
    .then((data) => {
        render(data);
    })
    .catch(() => {
       console.log('No existe ese número de pokemon') 
    })


    

