import React from 'react';

const covidResultNation = ( props ) => {
    //console.log('[covidResultNation.js]');
    return (
        <tr>
            <td>{props.country}</td>
            <td>{props.amount}</td>
        </tr>
    )
};

export default covidResultNation;