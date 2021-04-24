import React, { useState } from 'react';
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

    const requestorCovidHandler = () =>{
        
        if(isShowCovid.isShowRest){
            axios.get("https://covid19.th-stat.com/api/open/timeline").then(response => {
            console.log(response);
    
                setCovidState({
                    posts : response.data.Data
                })
            }).catch(
                error => setErrorCovidState({
                errorPosts : true
            }));

            setIsShowCovid({
                isShowRest : false
            });
        }else{
            setIsShowCovid({
                isShowRest : true
            });

            setCovidState({
                posts : []
            })
        }
            
    }

    return (
        <BasicAuxWrapper>            
            <CovidHeader clicked={requestorCovidHandler}/>
            <CovidCockpit data={covidState} error={errorCovidState}></CovidCockpit>
        </BasicAuxWrapper>
    );
}
export default Covid;