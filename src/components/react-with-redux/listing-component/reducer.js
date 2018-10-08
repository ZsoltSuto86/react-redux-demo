import * as types from './action-types';
import { initialState } from './initialState';

const ListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_API_SUCCESS:
            return {
                ...state,
                randomUsers: action.randomUsers
            }
        case types.LOAD_API_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default ListingReducer;