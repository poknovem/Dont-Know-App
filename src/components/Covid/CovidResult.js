import React from 'react';

const covidResult = ( props ) => {
    //console.log('[covidResult.js]');
    return (
        <tr>
            <td>{props.Date}</td>
            <td>{props.NewConfirmed}</td>
            <td>{props.NewRecovered}</td>
            <td>{props.NewHospitalized}</td>
            <td>{props.NewDeaths}</td>
            <td>{props.Confirmed}</td>
            <td>{props.Recovered}</td>
            <td>{props.Hospitalized}</td>
            <td>{props.Deaths}</td>
        </tr>
    )
};

export default covidResult;