import {
    FAIL,
    FETCHING,
    FETCHED
}from '../actions';

const initialListState = {
    fetchingList: false,
    users: [],
    error: null
  }

export const listReducer = (state = initialListState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingList: true,
                error: ''
            }
        case FETCHED: {
            return {
                ...state,
                users: action.payload,
                fetchingList: false,
                error: ''
            }
        }
        
        case FAIL:
            return {
                ...state,
                fetchingList: false,
                error: action.payload
            }
        default:
            return state;
    }
}