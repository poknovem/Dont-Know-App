import React from 'react'
import CovidResultNation from './CovidResultNation';

const covidResultsNations = (props) => Object.keys(props.data).map((key, i) => {
    
    //console.log('keys value : ' + key );
    //console.log('[covidResultsNations.js]');
    return (
        <CovidResultNation
            key = {key}
            country = {key}            
            amount = {props.data[key]}>
        </CovidResultNation>
    );
}); 
    

export default covidResultsNations;