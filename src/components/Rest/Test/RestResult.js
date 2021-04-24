import React from 'react';

const restResult = ( props ) => {
    console.log('[restResult.js]');
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.userId}</td>
            <td>{props.title}</td>
            <td>{props.body}</td>
        </tr>
    )
};

export default restResult;