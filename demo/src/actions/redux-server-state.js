/*************************************************************
Redux Server State
© 2023 Henry Nguyen a.k.a Dev9x
This library is designed to retrieve the results from an API request 
and store them as a state in the reducer on the client-side.
************************************************************/

import { create } from 'no-reducer';
import axios from "axios"

// Object for making HTTP requests using different methods
const stateRequest =  {

    // Function for making a GET request
    get : (url, config, callback) =>{
        return async (dispatch) => {
            const res = await axios.get(url,config)
            dispatch(handleCallback(callback,res,url,config))
        }
    },

    // Function for making a POST request
    post : (url, payload ,config,callback) =>{
        return async (dispatch) => {
            const res = await axios.post(url,payload,config)
            dispatch(handleCallback(callback,res,url,config))
        }
    },

    // Function for making a PUT request
    put : (url, payload ,config,callback) =>{
        return async (dispatch) => {
            const res = await axios.put(url,payload,config)
            dispatch(handleCallback(callback,res,url,config))
        }
    },

    // Function for making a DELETE request
    delete : (url, payload ,config,callback) =>{
        return async (dispatch) => {
            const res = await axios.delete(url,payload,config)
            dispatch(handleCallback(callback,res,url,config))
        }
    },

    // Function for making a PATCH request
    patch : (url, payload ,config,callback) =>{
        return async (dispatch) => {
            const res = await axios.patch(url,payload,config)
            dispatch(handleCallback(callback,res,url,config))
        }
    }
}



// Function for handling a callback after an HTTP request
const handleCallback = (callback, res, url, config) => {
    return async (dispatch) => {
        if(callback){
            // If a callback function is provided, 
            //dispatch the callback with the response
            dispatch(callback(res));
        }else{
            // If no callback function is provided, 
            // dispatch the handleReturn function with the URL, config, and response
            dispatch(handleReturn(url, config, res))
        }
    }
}


// Function for handling the returned data from an HTTP request
const handleReturn = (url, config, res) => {
    return async (dispatch) => {
        // Check if the result is not in the root level, navigate to it
        if (config && config.root) {
            const isArray = Array.isArray(res.data[config.root]);
            if (isArray) {
                console.log(isArray)
                // If the data is an array with only one element,
                // dispatch the handleStateName function with the URL, the single element, and the config
                if (res.data[config.root].length === 1) {
                    dispatch(handleStateName(url, res.data[config.root][0], config));
                }
            } else {
                // If the data is not an array, 
                // dispatch the handleStateName function with the URL, the data in the root level, and the config
                dispatch(handleStateName(url, res.data[config.root], config));
            }
        } else {
            // If no root level is specified, 
            // dispatch the handleStateName function with the URL, the entire data, and the config
            dispatch(handleStateName(url, res.data, config));
        }
    }
}


// Function for handling the state name of the returned object
const handleStateName = (url, object, config) => {
    return async (dispatch) => {
        // Check if the config specifies a state name
        if (config && config.state) {
            // Assign the object with the specified name as the state
            object = { [config.state]: object };
        } else if (Array.isArray(object)) {
            // If no name is provided and the object is an array, use the endpoint as the state name
            const urlArray = url.split('/');
            const objName = urlArray[urlArray.length - 1].split('?')[0];
            object = { [objName]: object };
        }

        for (const key in object) {
            // Dispatch the create action with the key and the object
            dispatch(create(key, object[key]));
        }
    }
}


export default stateRequest

export {create,clear,insert,update,remove,replace,refresh,reducer,append } from 'no-reducer'