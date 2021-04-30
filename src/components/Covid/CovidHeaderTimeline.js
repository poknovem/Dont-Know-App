import React from 'react';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';

const covidHeaderTimeline = ( props ) => {
    console.log('[covidHeaderTimeline.js]');
    return (
        <BasicAuxWrapper>
            <th>วันที่</th>
            <th>ผู้ป่วยใหม่</th>
            <th>รักษาหายใหม่</th>
            <th>เข้ารับการรักษาในโรงพยาบาลใหม่</th>
            <th>เสียชีวิต</th>
            <th>ติดโควิดทั้งหมด</th>
            <th>รักษาหายทั้งหมด</th>
            <th>เข้ารับการรักษาในโรงพยาบาลทั้งหมด</th>
            <th>เสียชีวิตสะสม</th>
        </BasicAuxWrapper>
    )
};

export default covidHeaderTimeline;