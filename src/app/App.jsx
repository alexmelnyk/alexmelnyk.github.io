import React from 'react';

import { 
    Router, 
    Switch, 
    Route, 
    Redirect 
} from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './store';

import Employees from '../employees/Employees.jsx';
import About from '../about/About.jsx';

import createHistory from 'history/createBrowserHistory';

const history = createHistory({});

export default class App extends React.Component {

    render() {
        return (
            <div className='app-container'>
                <Provider store={Store}>
                    <Router history={history}>
                        <Switch>
                            <Route path='/employees' component={Employees} />
                            <Route path='/about' component={About} />
                            <Redirect from="/" to="/employees" />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        )
    }
}