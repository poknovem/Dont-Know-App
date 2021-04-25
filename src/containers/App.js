import React from 'react';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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