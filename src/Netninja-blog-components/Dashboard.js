import React from 'react';
import { useState, useEffect } from "react";
import { Link, NavLink, Switch, Route } from 'react-router-dom';

function EmployeeSalaryInfo() {

    return (
        <h2>Employee Salary Details...</h2>
    );
}


function EmployeeProjectInfo() {
    return (

        <h2>Employee Project Details...</h2>

    );
}

function EmployeePersonalInfo(props) {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch("https://localhost:44306/api/Employee/" + props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setEmployee(result);
                }
            );
    });
    function changeEmployeeData(e) {

    }
    return (
        <div>
            <h2>Employee Details...</h2>
            <p>
                <label>Employee ID : <input type="text" name="Id"
                    value={employee.Id} onChange={changeEmployeeData}></input></label>
            </p>
            <p>
                <label>Employee Name : <input type="text" name="Name"
                    value={employee.Name} onChange={changeEmployeeData}></input></label>
            </p>
            <p>
                <label>Employee Location : <input type="text" name="Location"
                    value={employee.Location} onChange={changeEmployeeData}></input></label>
            </p>
            <p>
                <label>Employee Salary : <input type="text" name="Salary"
                    value={employee.Salary} onChange={changeEmployeeData}></input></label>
            </p>
            <button>Update</button>
        </div>
    );
}
function EditEmployee(props) {

    return (
        <div>
            <Link to={"/employee/" + props.match.params.id}>Personal</Link> &nbsp;&nbsp;
            <NavLink to={"/employee/" + props.match.params.id + "/salary"} activeClassName="testClass">Salary</NavLink>&nbsp;&nbsp;
            <NavLink to={"/employee/" + props.match.params.id + "/projects"} activeClassName="testClass">Projects</NavLink>

            <Switch>
                <Route exact path="/employee/:id" component={EmployeePersonalInfo}></Route>
                <Route path="/employee/:id/salary" component={EmployeeSalaryInfo}></Route>
                <Route path="/employee/:id/projects" component={EmployeeProjectInfo}></Route>

            </Switch>

        </div>
    )
}

export default EditEmployee