import React from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';

const restHeader = ( props ) => {
    console.log('[restHeader.js]');
    return (
        <BasicAuxWrapper>
            <h1>REST API section</h1>
            <br/>
            <button 
                onClick={props.clicked}>Request!!!</button>
            <br/><br/>
        </BasicAuxWrapper>
    )
};

export default restHeader;