import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { connect } from 'react-redux';

import { requestTableData } from '../actions/requestTableData';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const mapStateToProps = (state) => {
    return {
        tableData: state.tableData
    }
};

const mapDispatchToProps = (dispatch) => {  
    return {
        requestTableData: (url, body) => {
            dispatch(requestTableData(url, body))
        }
    }
};


export class CustomTable extends React.Component{

    constructor(props){
        super(props); 
        this.getTableRows = this.getTableRows.bind(this);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    getTableRows(tableData){

        return tableData.map((row) => { 

            return(
                <TableRow key={row.id}>
                    <TableRowColumn>{row.id}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
            )

        })

    }

    componentWillMount(){
        this.props.requestTableData('/data.json', {});
    }

    render(){
        return(
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody>  
                    {this.getTableRows(this.props.tableData.data)} 
                </TableBody>
            </Table>            
        )
    }

}

CustomTable.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomTable)