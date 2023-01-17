import React from "react";
import '../App.css';
import { NavLink } from 'react-bootstrap'

export const NewPassword = () => {
    return(
        <>
        <NavLink href="/">Dashboard</NavLink>
        <div className="row" style={{width:'50%',margin:'15px'}}>
        <div className="col-md-6 mb-3">
        <label>New password</label>
        <input type="password" className="form-control" placeholder="" required=""/>
        </div>
        <div className="col-md-6 mb-3">
        <label>Confirm password</label>
        <input type="password" className="form-control" placeholder="" required=""/>
        </div>
        </div>
        <button style={{width:'50%',margin:'15px','borderRadius':'25px'}}>Change Password</button>
        </>
    );
}