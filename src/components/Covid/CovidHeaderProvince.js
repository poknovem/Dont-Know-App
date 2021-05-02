import React, { useContext } from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';
import Context from '../../context/Context';

const CovidHeaderProvince = ( props ) => {
    console.log('[covidHeaderProvince.js]');
    const context = useContext(Context);
    return (
        <BasicAuxWrapper>
            <th>{context.label.PROVINCE}</th>
            <th>{context.label.COMFIRMED}</th>
        </BasicAuxWrapper>
    )
};

export default CovidHeaderProvince;