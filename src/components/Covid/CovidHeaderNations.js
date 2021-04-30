import React from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';

const covidHeaderNations = ( props ) => {
    console.log('[covidHeaderNations.js]');
    return (
        <BasicAuxWrapper>
            <th>เชื้อชาติที่อาศัยในประเทศไทย</th>
            <th>ติดโควิดทั้งหมด</th>
        </BasicAuxWrapper>
    )
};

export default covidHeaderNations;