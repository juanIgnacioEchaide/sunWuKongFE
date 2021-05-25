import { 
    REQUEST_MENUS_LOADING, 
    REQUEST_MENUS_ERROR, 
    REQUEST_MENUS_SUCCESS,
 } from '../actionTypes'

const initialState = {
    loading: false,
    error: null,
    menus: []
}

 const menuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_MENUS_LOADING:
            return { ...state, loading: true }
        case REQUEST_MENUS_ERROR:
            return { ...state, loading: false, error: payload }
        case REQUEST_MENUS_SUCCESS:
            return { ...state, loading: false, menus: payload }
        default:
            return state
    }
    
}

export default menuReducer;