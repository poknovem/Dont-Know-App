import React from 'react'
import CovidResultProvince from './CovidResultProvince';

const covidResultsProvinces = (props) => Object.keys(props.data).map((key, i) => {
    
    //console.log('keys value : ' + key );
    //console.log('[covidResultsProvinces.js]');
    return (
        <CovidResultProvince
            key = {key}
            province = {key}            
            amount = {props.data[key]}>
        </CovidResultProvince>
    );
}); 
    

export default covidResultsProvinces;