import React from 'react';

import Store from './store';
import { Provider } from 'react-redux';

import { mock } from './mock.js';
import { setAsset } from './appActions';

let assetArray = [];
mock.subscribe(val => {
    assetArray.push(val);

    if (assetArray.length >= 400) {
        Store.dispatch(setAsset(assetArray));
        assetArray = [];
    }

});

import AssetsComponent from '../components/AssetsComponent.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <AssetsComponent/>
            </Provider>    
        )
    }
}  