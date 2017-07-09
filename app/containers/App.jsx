import React from 'react';
import CitySelect from '../components/CitySelect';
import PeriodSelect from '../components/PeriodSelect';
import Forecast from '../components/Forecast';


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

export default class App extends React.Component {

    render(){
        return(
            <div className = 'weather-app'>
                <h1 className = 'weather-app__header'>Weather Widget</h1>
                <CitySelect/>
                <Forecast/>
                <PeriodSelect/>
            </div>
        )
    }

}