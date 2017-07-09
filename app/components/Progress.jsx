import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Progress extends React.Component{
    constructor(props){
        super(props)
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render(){
        return(
            <div className = 'progress-bar'>
                <div className = 'progress-bar__wrap'>
                    <CircularProgress/>
                </div>
            </div>
        )
    }
}

Progress.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};