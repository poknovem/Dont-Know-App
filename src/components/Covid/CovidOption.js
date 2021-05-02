import React, { useContext } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as Constants from '../../constants/Constants.js';
import Context from '../../context/Context';

const CovidOption = props =>{
    console.log('[covidOption.js]');
    const context = useContext(Context);
    return (   
        <select id="covidOptionId" className="form-select" aria-label="Default select example" value={props.selected} onChange={(event)=>{props.changed(event)}}>
            <option value={Constants.COVID_TIMELINE_OPTION}>{context.label.TIMELINE_OPTION}</option>
            <option value={Constants.COVID_PROVINCE_OPTION}>{context.label.PROVINCE_OPTION}</option>
            <option value={Constants.COVID_NATIONS_OPTION}>{context.label.NATION_OPTION}</option>
        </select>
    );
}
export default CovidOption;