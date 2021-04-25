import React, { useState, useEffect } from 'react';
import '../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CovidCockpit from '../../components/Rest/Covid/CovidCockpit';
import CovidHeader from '../../components/Rest/Covid/CovidHeader';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';


const Covid = props =>{
    const [covidState, setCovidState] = useState({
        posts : []
    });

    const [errorCovidState, setErrorCovidState] = useState({
        errorPosts : false
    });

    const [isShowCovid, setIsShowCovid] = useState({
        isShowRest : true
    });

    useEffect(() => {
        console.log('[Covid.js] 1nd useEffect');
        axios.get("https://covid19.th-stat.com/api/open/timeline").then(response => {
            console.log(response);
    
                setCovidState({
                    posts : response.data.Data
                })
            }).catch(
                error => setErrorCovidState({
                errorPosts : true
            }));
    },[]);

    return (
        <BasicAuxWrapper>            
            <CovidHeader/>
            <CovidCockpit data={covidState} error={errorCovidState}></CovidCockpit>
        </BasicAuxWrapper>
    );
}
export default Covid;