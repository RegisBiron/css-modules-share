import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './views/App/App';
import Home from './views/Home/Home';
import About from './views/About/About';

render((
	<Router>
	  <App>
	  	<Route path="/" exact component={Home} />
	  	<Route path="/about" component={About} />
	  </App>
  </Router>
), document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
