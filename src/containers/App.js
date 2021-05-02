import React, { useState } from 'react';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Covid from '../containers/Covid/Covid.js';
import Context from '../context/Context';
import * as Constants from '../constants/Constants.js';

const App = (props) =>{
    console.log('[App.js]');

    const [languageState, setLanguageState] = useState({
        language : Constants.LANGUAGE_TH
    });

    const onChangeLanguage = lang =>{
        console.log('[onChangeLanguage] : ' + lang);
        if(lang!==languageState.language){
            setLanguageState({
                language : lang
            })
        }    
    }

    let languageObj = null;
    if(languageState.language === Constants.LANGUAGE_TH){
        languageObj = require('../constants/LabelTH')
    }else if(languageState.language === Constants.LANGUAGE_EN){
        languageObj = require('../constants/LabelEN')
    }
    
    return (
        <div className="App">  
            <div align="right">
                <button type="button" className="link-button" onClick={() => onChangeLanguage(Constants.LANGUAGE_TH)}>TH</button>&nbsp;|&nbsp;
                <button type="button" className="link-button" onClick={() => onChangeLanguage(Constants.LANGUAGE_EN)}>EN</button>&nbsp;&nbsp;
            </div>
            
            <Context.Provider
                value={{
                    label: languageObj
                }}>
                <Covid/>
            </Context.Provider>

            {/* <RestTest/> */}
        </div>
    );
};
export default App;