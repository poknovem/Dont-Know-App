import React from 'react'
import RestResult from './RestResult';

const restResults = (props) => props.data.map((restResult, index) => {
    console.log('[restResults.js]');
    return (
        <RestResult
            userId = {restResult.userId}
            id = {restResult.id}
            key = {restResult.id}
            title = {restResult.title}
            body = {restResult.body}></RestResult>
    );
});

export default restResults;