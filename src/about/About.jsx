import React from 'react';

import { Link } from 'react-router-dom';

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About page</h1>
                <Link to="/employees">Employees</Link>
            </div>
        )
    }
}