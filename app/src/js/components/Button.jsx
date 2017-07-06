import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <MuiThemeProvider>
                <RaisedButton label={this.props.label} onClick = {this.props.onClick} />    
            </MuiThemeProvider>
        )
    }
}