import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CovidCockpit from '../../components/Rest/Covid/CovidCockpit';
import CovidHeader from '../../components/Rest/Covid/CovidHeader';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';
import CovidOption from '../../components/Rest/Covid/CovidOption';



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

    const [selectedValue, setSelectedValue] = useState({
        selectedValue : "1"
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
        if(selectedValue.selectedValue==="1"){
            axios.get("https://covid19.th-stat.com/api/open/timeline").then(response => {
                //console.log(response);

                    setCovidState({
                        posts : response.data.Data
                    })
                }).catch(
                    error => setErrorCovidState({
                    errorPosts : true
                }));
        }else if(selectedValue.selectedValue==="2"){
            axios.get("https://covid19.th-stat.com/api/open/cases/sum").then(response => {
                //console.log(response);
        
                    setSummaryState({
                        posts : response.data.Province
                    })
                   
                    
                    
                }).catch(
                    error => setErrorCovidState({
                    errorPosts : true
                }));
        }else if(selectedValue.selectedValue==="3"){
            axios.get("https://covid19.th-stat.com/api/open/cases/sum").then(response => {
                //console.log(response);
        
                    setSummaryState({
                        posts : response.data.Nation
                    })
                   
                    
                    
                }).catch(
                    error => setErrorCovidState({
                    errorPosts : true
                }));
        }
    }

    useEffect(() => {
        console.log('1nd useEffect : selectedValue.selectedValue : ' + selectedValue.selectedValue );
        handlerCovidOption();
            
    },[selectedValue]);

    return (
        <BasicAuxWrapper>            
            <CovidHeader/>
            <br/>
            <CovidOption changed={onChangeCovidOption} selected={selectedValue.selectedValue}/>
            <br/><br/>
            {selectedValue.selectedValue === "1" &&
                <CovidCockpit data={covidState} error={errorCovidState} selected={selectedValue.selectedValue}></CovidCockpit>
            }
            {selectedValue.selectedValue === "2" &&
                <CovidCockpit data={summaryState} error={errorCovidState} selected={selectedValue.selectedValue}></CovidCockpit>
            }
            {selectedValue.selectedValue === "3" &&
                <CovidCockpit data={summaryState} error={errorCovidState} selected={selectedValue.selectedValue}></CovidCockpit>
            }
        </BasicAuxWrapper>
    );
}
export default Covid;