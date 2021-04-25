import React from 'react';
import CovidResults from './CovidResults.js';
import './Covid.css';

const covidCockpit = (props) => {
    let postsKeeper = null;
    if(!props.error.errorPosts){
      postsKeeper = <CovidResults data = {props.data.posts} />
    }
    console.log('[covidCockpit.js]');
    return (

        <table className="table table-hover fixTableHead">
            <thead className="thead-dark">
                <tr>
                    <th>วันที่</th>
                    <th>ผู้ป่วยใหม่</th>
                    <th>รักษาหายใหม่</th>
                    <th>เข้ารับการรักษาในโรงพยาบาลใหม่</th>
                    <th>เสียชีวิต</th>
                    <th>ติดโควิดทั้งหมด</th>
                    <th>รักษาหายทั้งหมด</th>
                    <th>เข้ารับการรักษาในโรงพยาบาลทั้งหมด</th>
                    <th>เสียชีวิตสะสม</th>
                </tr>
            </thead>
            <tbody>
              {postsKeeper}
            </tbody>
        </table>
    );

}

export default covidCockpit;