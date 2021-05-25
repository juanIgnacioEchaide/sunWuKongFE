import { 
    REQUEST_PROMOS_LOADING, 
    REQUEST_PROMOS_ERROR, 
    REQUEST_PROMOS_SUCCESS,
 } from '../actionTypes'

const initialState = {
    loading: false,
    error: null,
    promos: []
}

 const ticketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_PROMOS_LOADING:
            return { ...state, loading: true }
        case REQUEST_PROMOS_ERROR:
            return { ...state, loading: false, error: payload }
        case REQUEST_PROMOS_SUCCESS:
            return { ...state, loading: false, promos: payload }
        default:
            return state
    }
    
}

export default ticketReducer;