import React from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';

const covidHeader = ( props ) => {
    console.log('[covidHeader.js]');
    return (
        <BasicAuxWrapper>
            <h1>Thailand Covid Report</h1>
            <cite title="ข้อมูลจากกรมควบคุมโรค">ข้อมูลจากกรมควบคุมโรค</cite>
            <br/>
        </BasicAuxWrapper>
    )
};

export default covidHeader;