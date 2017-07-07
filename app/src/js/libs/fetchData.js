require('es6-promise').polyfill();

import fetch from 'isomorphic-fetch'

function requestData(REQUEST_ACTION){
    return {
        type: REQUEST_ACTION,
        status: 'MAKE_REQUEST',
        data : []
    }
}

function receiveData(RECEIVE_ACTION, json){
    return {
        type: RECEIVE_ACTION,
        status: 'DONE',
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchData(REQUEST_ACTION, RECEIVE_ACTION, url, body) {

    return (dispatch) => {
        dispatch(requestData(REQUEST_ACTION));
        return fetch(url, body)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => dispatch(receiveData(RECEIVE_ACTION, json)))
            .catch((error) => {
                console.log(error)
            })
    }

}