import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const tableData = [
  {
    id: 1,  
    name: 'John Smith',
    status: 'Employed',
  },
  {
    id: 2,  
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    id: 3,  
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    id: 4,  
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    id: 5,  
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    id: 6,  
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    id: 7,  
    name: 'Adam Moore',
    status: 'Employed',
  },
];

export default class CustomTable extends React.Component{

    constructor(props){
        super(props);
        this.getTableRows = this.getTableRows.bind(this);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    getTableRows(){

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
                    {this.getTableRows()}
                </TableBody>
            </Table>            
        )
    }

}

CustomTable.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};