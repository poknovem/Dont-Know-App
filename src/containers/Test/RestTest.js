import React, { useState } from 'react';
import '../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RestCockpit from '../../components/Rest/Test/RestCockpit';
import RestHeader from '../../components/Rest/Test/RestHeader';
import BasicAuxWrapper from '../../hoc/BasicAuxWrapper';

const RestTest = props =>{
    const [postsState, setPostsState] = useState({
        posts : []
    });

    const [errorPostsState, setErrorPostsState] = useState({
        errorPosts : false
    });

    const [isShowRest, setIsShowRest] = useState({
        isShowRest : true
    });

    const requestorHandler = () =>{
        
        if(isShowRest.isShowRest){
            axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            //console.log(response);
    
                setPostsState({
                    posts : response.data
                })
            }).catch(
                error => setErrorPostsState({
                errorPosts : true
            }));

            setIsShowRest({
                isShowRest : false
            });
        }else{
            setIsShowRest({
                isShowRest : true
            });

            setPostsState({
                posts : []
            })
        }
            
    }


    return (
        <BasicAuxWrapper>            
            <RestHeader clicked={requestorHandler}/>
            <RestCockpit data={postsState} error={errorPostsState}></RestCockpit>
        </BasicAuxWrapper>
    );
}

export default RestTest;