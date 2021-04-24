import React, { useState } from 'react';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RestCockpit from '../components/Rest/Test/RestCockpit';
import RestHeader from '../components/Rest/Test/RestHeader';
import CovidCockpit from '../components/Rest/Covid/CovidCockpit';
import CovidHeader from '../components/Rest/Covid/CovidHeader';
import RestTest from '../containers/Test/RestTest.js';
import Covid from '../containers/Covid/Covid.js';


const App = (props) =>{
    return (
        <div className="App">            
            <Covid/>
            {/* <RestTest/> */}
        </div>
    );
};
export default App;