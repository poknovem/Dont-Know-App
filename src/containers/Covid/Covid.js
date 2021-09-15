import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CovidCockpit from '../../components/Covid/CovidCockpit';
import CovidHeader from '../../components/Covid/CovidHeader';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';
import CovidOption from '../../components/Covid/CovidOption';
import * as Constants from '../../constants/Constants.js';



const Covid = props =>{
    console.log('[Covid.js]');
    const [covidState, setCovidState] = useState({
        posts : []
    });

    const [errorCovidState, setErrorCovidState] = useState({
        errorPosts : false
    });

    const [selectedValue, setSelectedValue] = useState({
        selectedValue : Constants.COVID_TIMELINE_OPTION
    });

    const onChangeCovidOption = (e) =>{
        //let covidOptionObj = document.getElementById('covidOptionId');
        console.log('e.target.value > ' + e.target.value);

        setSelectedValue({
            selectedValue : e.target.value
        })
    }

    const [summaryState, setSummaryState] = useState({
        posts : {}
    });

    const handlerCovidOption = () =>{
        console.log('handlerCovidOption : ' + selectedValue.selectedValue );
        if(selectedValue.selectedValue===Constants.COVID_TIMELINE_OPTION){
            axios.get(Constants.COVID_TIMELINE_URL).then(response => {
                //console.log(response);

                    setCovidState({
                        posts : response.data
                    })
                }).catch(
                    error => setErrorCovidState({
                    errorPosts : true
                }));
        }else if(selectedValue.selectedValue===Constants.COVID_PROVINCE_OPTION){
            axios.get(Constants.COVID_SUMMARY_URL).then(response => {
                //console.log(response);
        
                    setSummaryState({
                        posts : response.data
                    })
                    
                }).catch(
                    error => setErrorCovidState({
                    errorPosts : true
                }));
        }else if(selectedValue.selectedValue===Constants.COVID_NATIONS_OPTION){
            axios.get(Constants.COVID_SUMMARY_URL).then(response => {
                //console.log(response);
        
                    setSummaryState({
                        posts : response.data
                    })
                    
                }).catch(
                    error => setErrorCovidState({
                    errorPosts : true
                }));
        }
    }

    useEffect(() => {
        console.log('1nd Covid.js useEffect : selectedValue.selectedValue : ' + selectedValue.selectedValue );
        handlerCovidOption();
            
    },[selectedValue]);

    let cockpitKeeper = null;
    if(selectedValue.selectedValue === Constants.COVID_TIMELINE_OPTION){
        cockpitKeeper = <CovidCockpit data={covidState} error={errorCovidState} selected={selectedValue.selectedValue}></CovidCockpit>
    }else if(selectedValue.selectedValue === Constants.COVID_PROVINCE_OPTION){
        cockpitKeeper = <CovidCockpit data={summaryState} error={errorCovidState} selected={selectedValue.selectedValue}></CovidCockpit>
    }else if(selectedValue.selectedValue === Constants.COVID_NATIONS_OPTION){
        cockpitKeeper = <CovidCockpit data={summaryState} error={errorCovidState} selected={selectedValue.selectedValue}></CovidCockpit>
    }

    return (
        <BasicAuxWrapper>            
            <CovidHeader/>
            <br/>
            <CovidOption changed={onChangeCovidOption} selected={selectedValue.selectedValue}/>
            <br/><br/>
            {cockpitKeeper}
        </BasicAuxWrapper>
    );
}
export default Covid;