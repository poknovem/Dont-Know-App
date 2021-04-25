import React from 'react';
import BasicAuxWrapper from '../../../hoc/BasicAuxWrapper';

const covidHeaderNations = ( props ) => {
    console.log('[covidHeaderNations.js]');
    return (
        <BasicAuxWrapper>
            <th>เชื้อชาติ</th>
            <th>จำนวน</th>
        </BasicAuxWrapper>
    )
};

export default covidHeaderNations;