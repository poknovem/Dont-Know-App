import React from 'react';
import RestResults from './RestResults.js';

const restCockpit = (props) => {
    let postsKeeper = null;
    if(!props.error.errorPosts){
      postsKeeper = <RestResults data = {props.data.posts} />
    }
    console.log('[restCockpit.js]');
    return (

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
    );

}

export default restCockpit;