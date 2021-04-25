import React from 'react';
import CovidResults from './CovidResults.js';
import './Covid.css';
import CovidHeaderTimeline from './CovidHeaderTimeline.js';
import CovidHeaderProvince from './CovidHeaderProvince.js';
import CovidResultsProvinces from './CovidResultsProvinces.js';
import CovidHeaderNations from './CovidHeaderNations.js';

const covidCockpit = (props) => {
    let postsKeeper = null;
    if(props.selected === "1"){
      postsKeeper = <CovidResults data = {props.data.posts} selected={props.selected}/>
    }else if(props.selected === "2"){
        postsKeeper = <CovidResultsProvinces data = {props.data.posts} selected={props.selected}/>
    }else if(props.selected === "3"){
        postsKeeper = <CovidResultsProvinces data = {props.data.posts} selected={props.selected}/>
    }

    console.log('[covidCockpit.js]');
    return (

        <table className="table table-hover fixTableHead">
            <thead className="thead-dark">
                <tr>
                    {props.selected === "1" &&
                        <CovidHeaderTimeline/>
                    }  

                    {props.selected === "2" &&
                        <CovidHeaderProvince/>
                    }  

                    {props.selected === "3" &&
                        <CovidHeaderNations/>
                    }  
                    
                </tr>
            </thead>
            <tbody>
              {postsKeeper}
            </tbody>
        </table>
    );

}

export default covidCockpit;