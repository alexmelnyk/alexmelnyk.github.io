import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Progress from './Progress';
import CustomTable from './CustomTable';

import { setIncrease } from '../actions/setIncrease';
import { setDecrease } from '../actions/setDecrease';


const mapStateToProps = (state) => {
    return {
        main: state.main
    }
};

const mapDispatchToProps = (dispatch) => { 
    return {
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
                <h1>Hello!</h1>
                <p>{this.props.main}</p>

                <Progress/> 

                <Button label='increase' onClick={this.props.setIncrease}/>
                <Button label='decrease' onClick={this.props.setDecrease}/>

                <CustomTable/>

            </div>

        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
