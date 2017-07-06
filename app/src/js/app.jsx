import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store'; 

import App from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
 
class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <App></App>
            </Provider>
        )
    } 
}

ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);