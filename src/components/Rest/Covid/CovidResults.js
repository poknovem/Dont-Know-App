import React from 'react'
import CovidResult from './CovidResult';

const covidResults = (props) => props.data.map((restResult, index) => {
    console.log('[covidResults.js]');
    return (
        <CovidResult
            id = {restResult.id}
            Date = {restResult.Date}            
            NewConfirmed = {restResult.NewConfirmed}
            NewRecovered = {restResult.NewRecovered}
            NewHospitalized = {restResult.NewHospitalized}
            NewDeaths = {restResult.NewDeaths}
            Confirmed = {restResult.Confirmed}
            Recovered = {restResult.Recovered}
            Hospitalized = {restResult.Hospitalized}
            Deaths = {restResult.Deaths}>
        </CovidResult>
    );
});

export default covidResults;