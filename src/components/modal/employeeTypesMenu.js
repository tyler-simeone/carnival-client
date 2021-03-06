import React, { useState, useEffect } from "react";
import EmployeeManager from "../../api/dataManager";
import "../../styles/employees/list.css"

const EmployeeTypeSelect = (props) => {
    const [employeeTypes, setEmployeeTypes] = useState([]);

    const fetchEmployeeTypes = () => {
        EmployeeManager.getAll("employeetypes").then((employeeTypes) => {
            setEmployeeTypes(employeeTypes);
        });
    };

    const handleEmployeeTypeSelect = (evt) => {
        const stateToChange = props.state;
        stateToChange[evt.target.id] = evt.target.value;
    };

    useEffect(() => {
        fetchEmployeeTypes();
    }, []);
    
    let uniqueID = "unique--ID"

    return (
        <>
        {employeeTypes !== undefined ? (
            <>
                <label className="employeeType--label">
                    Select Employee Type
                </label>
                <select
                    id="employee_type_id"
                    onChange={handleEmployeeTypeSelect}
                    className="employeeType--select"
                    defaultValue={'DEFAULT'}
                >
                    {" "}
                    <option key={uniqueID} defaultValue="DEFAULT"  disabled hidden>
                        Select an Option
                    </option>
                    {employeeTypes.map((type,i) => {
                        return (
                            <>
                                <option 
                                key={i} 
                                value={type.id}>
                                {type.name}</option>
                            </>
                        );
                    })}
                </select>
            </>
        ) : null}
        </>
    );
};

export default EmployeeTypeSelect;
