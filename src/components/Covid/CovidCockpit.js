import React from 'react';
import CovidResults from './CovidResults.js';
import './Covid.css';
import CovidHeaderTimeline from './CovidHeaderTimeline.js';
import CovidHeaderProvince from './CovidHeaderProvince.js';
import CovidResultsProvinces from './CovidResultsProvinces.js';
import CovidHeaderNations from './CovidHeaderNations.js';
import * as Constants from '../../constants/Constants.js';

const covidCockpit = (props) => {
    console.log('[covidCockpit.js]');

    let postsKeeper = null;
    let headerKeeper = null;
    
    if(props.selected === Constants.COVID_TIMELINE_OPTION){
      postsKeeper = <CovidResults data = {props.data.posts} selected={props.selected}/>
      headerKeeper = <CovidHeaderTimeline/>
    }else if(props.selected === Constants.COVID_PROVINCE_OPTION){
        postsKeeper = <CovidResultsProvinces data = {props.data.posts} selected={props.selected}/>
        headerKeeper = <CovidHeaderProvince/>
    }else if(props.selected === Constants.COVID_NATIONS_OPTION){
        postsKeeper = <CovidResultsProvinces data = {props.data.posts} selected={props.selected}/>
        headerKeeper = <CovidHeaderNations/>
    } 

    
    return (

        <table className="table table-hover fixTableHead">
            <thead className="thead-dark">
                <tr>
                    {headerKeeper} 
                </tr>
            </thead>
            <tbody>
              {postsKeeper}
            </tbody>
        </table>
    );

}

export default covidCockpit;