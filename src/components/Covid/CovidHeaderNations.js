import React, { useContext } from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';
import Context from '../../context/Context';

const CovidHeaderNations = ( props ) => {
    console.log('[covidHeaderNations.js]');
    const context = useContext(Context);
    return (
        <BasicAuxWrapper>
            <th>{context.label.NATION}</th>
            <th>{context.label.COMFIRMED}</th>
        </BasicAuxWrapper>
    )
};

export default CovidHeaderNations;