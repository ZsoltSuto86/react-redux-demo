import * as actions from './action-types';

export const loadSuccessDispatch= (randomUsers) =>({
    type: actions.LOAD_API_SUCCESS,
    randomUsers: randomUsers
})

export const loadErrorDispatch= (error) => ({
    type: actions.LOAD_API_ERROR,
    error: error
})

export const apiFetch = (numberOfUsers) => {
    if(numberOfUsers>5000){
        numberOfUsers = 5000;
    }

    return(dispatch)=>{
        fetch('https://randomuser.me/api/?results='+ numberOfUsers).then(response => response.json().then(result => ({ result, response }))
        ).then(({ result, response }) => {
            if (response.ok) {
                dispatch(loadSuccessDispatch(result));
            } else {
                dispatch(loadErrorDispatch("wrong response"))
            }
        })
        .catch((error) => {
            dispatch(loadErrorDispatch(error))
        });
    }

}