import '../css/index.css';
//esto usualmente no se puede hacer, es permitido gracias a webpack. 
import React from 'react';

import { render } from 'react-dom';
import App from './components/app'

render (<App />, document.getElementById('container'));

    

