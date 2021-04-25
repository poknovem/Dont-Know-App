import React, { useState, useEffect } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const covidOption = props =>{
    return (   
        <select id="covidOptionId" className="form-select" aria-label="Default select example" value={props.selected} onChange={(event)=>{props.changed(event)}}>
            <option value="1">Timeline</option>
            <option value="2">Province</option>
            <option value="3">Nation</option>
        </select>
    );
}
export default covidOption;