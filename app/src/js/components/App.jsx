import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';

import { setMain } from '../actions/setMain'; 
import { setIncrease } from '../actions/setIncrease';
import { setDecrease } from '../actions/setDecrease';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const mapStateToProps = (state) => {
    return {
        main: state.main
    }
};

const mapDispatchToProps = (dispatch) => { 
    return {
        setMain: (main) => {
            dispatch(setMain(main));
        },
        setIncrease: () => {
            dispatch(setIncrease());
        },
        setDecrease: () => {
            dispatch(setDecrease());
        }        
    }
};


export class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (

            <div className = 'react-app'>
                <h1>Hellffo!</h1>
                <p>{this.props.main}</p>

                <Button label='increase' onClick={this.props.setIncrease}/>
                <Button label='decrease' onClick={this.props.setDecrease}/>

            </div>

        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
