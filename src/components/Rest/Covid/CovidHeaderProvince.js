import React from 'react';
import BasicAuxWrapper from '../../../hoc/BasicAuxWrapper';

const covidHeaderProvince = ( props ) => {
    console.log('[covidHeaderProvince.js]');
    return (
        <BasicAuxWrapper>
            <th>จังหวัด</th>
            <th>จำนวน</th>
        </BasicAuxWrapper>
    )
};

export default covidHeaderProvince;