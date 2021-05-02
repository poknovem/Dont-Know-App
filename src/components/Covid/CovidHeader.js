import React, { useContext } from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';
import Context from '../../context/Context';

const CovidHeader = ( props ) => {
    console.log('[covidHeader.js]');
    const context = useContext(Context);
    return (
        <BasicAuxWrapper>
            <h1>Thailand Covid Report</h1>
            <cite title={context.label.REFERENCES}>{context.label.REFERENCES}</cite>
            <br/>
        </BasicAuxWrapper>
    )
};

export default CovidHeader;