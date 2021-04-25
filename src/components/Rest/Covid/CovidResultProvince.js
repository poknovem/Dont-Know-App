import React from 'react';

const CovidResultProvince = ( props ) => {
    console.log('[CovidResultProvince.js]');
    return (
        <tr>
            <td>{props.province}</td>
            <td>{props.amount}</td>
        </tr>
    )
};

export default CovidResultProvince;