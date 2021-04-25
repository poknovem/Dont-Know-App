import React from 'react';
import BasicAuxWrapper from '../../../hoc/BasicAuxWrapper';

const covidHeader = ( props ) => {
    console.log('[covidHeader.js]');
    return (
        <BasicAuxWrapper>
            <h1>Thailand Covid Report</h1>
        </BasicAuxWrapper>
    )
};

export default covidHeader;