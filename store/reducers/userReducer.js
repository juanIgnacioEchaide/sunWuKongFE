import { 
    REQUEST_USER_LOADING, 
    REQUEST_USER_ERROR, 
    REQUEST_USER_SUCCESS,
 } from '../actionTypes'

const initialState = {
    loading: false,
    error: null,
    user: {}
}

 const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_USER_LOADING:
            return { ...state, loading: true }
        case REQUEST_USER_ERROR:
            return { ...state, loading: false, error: payload }
        case REQUEST_USER_SUCCESS:
            return { ...state, loading: false, user: payload }
        default:
            return state
    }
    
}

export default userReducer;