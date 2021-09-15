import React from 'react'
import CovidResult from './CovidResult';

const covidResults = (props) => props.data.slice(0).reverse().map((restResult, index) => {
    //console.log('[covidResults.js]');
    return (
        <CovidResult
            key = {index}
            Date = {restResult.txn_date}            
            NewConfirmed = {restResult.new_case}
            NewRecovered = {restResult.new_recovered}
            //NewHospitalized = {restResult.NewHospitalized}
            NewDeaths = {restResult.new_death}
            Confirmed = {restResult.total_case}
            Recovered = {restResult.total_recovered}
            //Hospitalized = {restResult.Hospitalized}
            Deaths = {restResult.total_death}>
        </CovidResult>
    );
});

export default covidResults;