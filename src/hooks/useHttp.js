import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import * as Constants from '../constants/Constants.js';

const useHttp = props =>{
    console.log('[useHttp.js]');

    const [errorCovidState, setErrorCovidState] = useState({
        errorPosts : false
    });

    const sendRequest = async (url, responseHandler) =>{
        axios.get(url).then(response => {
                //console.log(response);
                console.log('before set state');
                responseHandler(response);
                console.log('after set state');
            }).catch(
                error => setErrorCovidState({
                errorPosts : true
        }));
    };

    useEffect(() => {
        console.log('1nd useHttp.js useEffect');            
    },[]);

    return {error: errorCovidState, sendRequest};
}


export default useHttp;