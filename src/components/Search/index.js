import React, { Component } from "react";
import employees from "../../employees.json";
import "./style.css";
import EmployeeCard from "../EmployeeCard";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees,
            filteredEmployees: []
        }
    }
    filterList = e => {
        const filterTarget = e.target.value;
        let employeeDirectory = this.state.employees;
        employeeDirectory = employeeDirectory.filter(i => {
            let values = Object.values(i)
            .join("")
            .toLowerCase();
        return values.indexOf(filterTarget.toLowerCase()) !== -1;
            })
            this.setState({filteredEmployees: employeeDirectory})
    }

    render() {
        return(
            <div className="filter-list">
                <input className="search" type="text" placeholder="Search" onChancge={this.fileterList} />

                {
                    this.state.filteredEmployees[0]?
                    this.state.filteredEmployees.map(employee => (
                        <EmployeeCard
                        id={employee.id}
                        key={employee.id}
                        name={employee.name}
                        image={employee.image}
                        position={employee.position}
                        location={employee.location}
                        employeeId={employee.employeeId}
                        />
                    ))
                    :
                    this.state.employees.map(employee => (
                        <EmployeeCard 
                        id={employee.id}
                        key={employee.id}
                        name={employee.name}
                        image={employee.image}
                        position={employee.position}
                        location={employee.location}
                        employeeId={employee.employeeId}
                        />
                    ))
                }
                </div>
        )
    }
}

export default Search;