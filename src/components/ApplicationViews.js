import React from "react"
import { Route, Redirect } from "react-router-dom"
import DashBoard from "../components/dashboard/DashBoard.js"
import DealershipList from "./dealership/list"
import EmployeeList from "./employee/searchListContainer"
import VehiclesList from "./vehicle/searchListContainer"
import SaleList from "./sale/list"


const ApplicationViews = props => {

    return (
        <>
            <Route exact path="/" render={props => {
                return <DashBoard {...props} />
            }} />

            <Route exact path="/employees" render={props => {
                return <EmployeeList {...props} />
            }} />

            <Route path="/dealerships" render={props => {
                return <DealershipList {...props} />
            }} />

            <Route path="/vehicles" render={props => {
                return <VehiclesList {...props} />
            }} />

            <Route path="/sales" render={props => {
                return <SaleList {...props} />
            }} />
        </>
    )
}

export default ApplicationViews;