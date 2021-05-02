import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as Constants from '../../constants/Constants.js';

const covidOption = props =>{
    console.log('[covidOption.js]');
    return (   
        <select id="covidOptionId" className="form-select" aria-label="Default select example" value={props.selected} onChange={(event)=>{props.changed(event)}}>
            <option value={Constants.COVID_TIMELINE_OPTION}>Timeline</option>
            <option value={Constants.COVID_PROVINCE_OPTION}>Province</option>
            <option value={Constants.COVID_NATIONS_OPTION}>Nation</option>
        </select>
    );
}
export default covidOption;