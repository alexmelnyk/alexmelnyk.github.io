import React from 'react';
import { connect } from 'react-redux';

import { setMain } from '../actions/setMain'; 

const mapStateToProps = (state) => {
    return {
        main: state.main
    }
};

const mapDispatchToProps = (dispatch) => { 
    return {
        setMain: (main) => {
            dispatch(setMain(main));
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

                <button onClick = {() => this.props.setMain(2) }>ololo</button>
            </div>

        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
