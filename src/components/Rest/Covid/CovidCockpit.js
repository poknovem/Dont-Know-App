import React from 'react';
import CovidResults from './CovidResults.js';

const covidCockpit = (props) => {
    let postsKeeper = null;
    if(!props.error.errorPosts){
      postsKeeper = <CovidResults data = {props.data.posts} />
    }
    console.log('[covidCockpit.js]');
    return (

        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>Date</th>
                    <th>NewConfirmed</th>
                    <th>NewRecovered</th>
                    <th>NewHospitalized</th>
                    <th>NewDeaths</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Hospitalized</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
              {postsKeeper}
            </tbody>
        </table>
    );

}

export default covidCockpit;