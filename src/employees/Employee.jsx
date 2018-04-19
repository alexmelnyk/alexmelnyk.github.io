import React from 'react';

export const Employee = (props) => {
    const {
        first_name,
        last_name,
        avatar,
        company,
        adress,
        phone,
    } = props

    return (
        <div className="employee"> 
            <img className="employee--avatar" src={avatar} alt="" />
            <div className="employee--info">
                <p className="first-name">First Name: <strong>{first_name}</strong></p>
                <p className="last-name">Last Name: <strong>{last_name}</strong></p>
                <p className="company">Company: <strong>{company}</strong></p>
                <p className="address">Adress: <strong>{adress}</strong></p>
                <p className="phone">Phone: <strong>{phone}</strong></p>
            </div>
        </div>
    )
}