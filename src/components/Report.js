import React  from "react";
import '../App.css';
import Select from 'react-select';
import {NavLink} from 'react-bootstrap'

const colourOptions = [
  { value: 'all', label: 'All' },
  { value: 'android', label: 'Android' },
  { value: 'java', label: 'Java' },
  { value: 'c++', label: 'C++' }
]

const data = ['a','b','c','d'];
export const Report = () => {
    return(
        <>
        <NavLink styles={{marginLeft:'15px'}} href="/">Dashboard</NavLink>
        <div style={{margin:'5%'}}>
            <Select defaultValue={[colourOptions[2]]}
                isMulti
                name="colors"
                options={colourOptions}
                className="basic-multi-select"
                classNamePrefix="select" />
        </div>
        </>
    );
}