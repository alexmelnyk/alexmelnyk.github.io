import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
 
class AppContainer extends React.Component {
    render() {
        return (
            <App></App>
        )
    } 
}

ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);