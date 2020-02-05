import '../css/index.css';
//esto usualmente no se puede hacer, es permitido gracias a webpack. 
import text from './text.js';

text();

if (module.hot) {
    module.hot.accept('./text.js', function() {
        console.log('He recargado en caliente');
        text(); 
    })
}
    

