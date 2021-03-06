import React from "react"
import "../../styles/modal/snackbar.css"

const SuccessSnackbar = (props) => {

    if (props.postedEmployee !== undefined) {
        document.querySelector('.snackbar').classList.add('show');

        setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show');
            props.setPostedEmployee();
        }, 2500)
    } else if (props.employeeUpdated === true) {
        document.querySelector('.snackbar').classList.add('show');

        setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show');
            props.setEmployeeUpdated(false);
        }, 2500)
    } else if (props.vehiclePosted === true) {
        document.querySelector('.snackbar').classList.add('show');

        setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show');
            props.setVehiclePosted();
        }, 2500)
    } else if (props.vehicleEdited === true) {
        document.querySelector('.snackbar').classList.add('show');

        setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show');
            props.setVehicleEdited();
        }, 2500)
    } else if (props.dealershipPosted === true) {
        document.querySelector('.snackbar').classList.add('show');

        setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show');
            props.setDealershipPosted();
        }, 2500)
    } else if (props.dealershipEdited === true) {
        document.querySelector('.snackbar').classList.add('show');

        setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show');
            props.setDealershipEdited();
        }, 2500)
    }

    return (
        <div className="snackbar">
            <h1>Success!</h1>
        </div>
    );
}

export default SuccessSnackbar;