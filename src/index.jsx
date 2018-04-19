import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(<App/>, document.getElementById('root'));