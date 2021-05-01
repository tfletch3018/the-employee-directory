import React from "react";
import "./style.css";

function EmployeeCard(props) {

    return (

        <div className="card">
            <div className="image-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: </strong> {props.name}
                    </li>
                    <li>
                        <strong>Position: </strong> {props.position}
                    </li>
                    <li>
                        <strong>Location: </strong> {props.location}
                    </li>
                    <li>
                        <strong>Employee ID: </strong> {props.employeeId}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;