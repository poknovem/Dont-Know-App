import React from 'react';
import RestResults from './RestResults.js';

const restCockpit = (props) => {
    let postsKeeper = null;
    if(!props.error.errorPosts){
      postsKeeper = <RestResults data = {props.data.posts} />
    }
    console.log('[testRest.js]');
    return (
      
      <div className="App">
        <h1>REST API section</h1>
        <br/>
        <button 
           onClick={props.clicked}>Request!!!</button>
        <br/><br/>

        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
              {postsKeeper}
            </tbody>
        </table>
        
      </div>
      
    );

}

export default restCockpit;