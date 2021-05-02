import React, { useContext } from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';
import Context from '../../context/Context';

const CovidHeaderTimeline = ( props ) => {
    console.log('[covidHeaderTimeline.js]');
    const context = useContext(Context);
    return (
        <BasicAuxWrapper>
            <th>{context.label.DATE}</th>
            <th>{context.label.NEW_CONFIRMED}</th>
            <th>{context.label.NEW_RECOVERED}</th>
            <th>{context.label.NEW_HOSPITALIZED}</th>
            <th>{context.label.NEW_DEATHS}</th>
            <th>{context.label.COMFIRMED}</th>
            <th>{context.label.RECOVERED}</th>
            <th>{context.label.HOSPITALIZED}</th>
            <th>{context.label.DEATHS}</th>
        </BasicAuxWrapper>
    )
};

export default CovidHeaderTimeline;