import { 
    REQUEST_TICKETS_LOADING, 
    REQUEST_TICKETS_ERROR, 
    REQUEST_TICKETS_SUCCESS,
 } from '../actionTypes'

const initialState = {
    loading:false,
    error: null,
    tickets: []
}

 const ticketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_TICKETS_LOADING:
            return { ...state, loading: true }
        case REQUEST_TICKETS_ERROR:
            return { ...state, loading: false, error: payload }
        case REQUEST_TICKETS_SUCCESS:
            return { ...state, loading: false, tickets: payload }
        default:
            return state
    }
    
}

export default ticketReducer;