import React from 'react';
import { connect } from 'react-redux';

import { 
    setEmployees,
    sortByName
} from './employeesActions';

import { Employee } from './Employee.jsx';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setEmployees: (employees) => dispatch(setEmployees(employees)),
        sortByName: (sortType) => dispatch(sortByName(sortType))
    }
};

export class Employees extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    async fetchEmployees() {
        if (this.props.employees.data.length) {
            return;
        }

        try {
            const resp = await fetch('http://localhost:3000/employees');
            const jsonResp = await resp.json();
    
            this.props.setEmployees(jsonResp);
        } catch(e) {
            console.log(e);
        }
    }

    renderEmployeesList() {
        const employees = this.props.employees.data;
        return employees.map(employee => <Employee key={employee.id} {...employee} />)
    }
    
    componentDidMount() {
        this.fetchEmployees();
    }
    
    render() {
        return (
            <div className="employees">
                <h2>Employees list</h2>
                <Link to="/about">About</Link>
                <div className="employees--sort">
                    <button onClick={() => this.props.sortByName('top')}>sort from top</button>
                    <button onClick={() => this.props.sortByName('bottom')}>sort from bottom</button>
                </div>
                <div className="employees--list">
                    {this.renderEmployeesList()}
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employees)