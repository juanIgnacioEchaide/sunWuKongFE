import { 
    REQUEST_PRODUCTS_LOADING, 
    REQUEST_PRODUCTS_ERROR, 
    REQUEST_PRODUCTS_SUCCESS,
 } from '../actionTypes'

const initialState = {
    loading: false,
    error: null,
    products: []
}

 const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_PRODUCTS_LOADING:
            return { ...state, loading: true }
        case REQUEST_PRODUCTS_ERROR:
            return { ...state, loading: false, error: payload }
        case REQUEST_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: payload }
        default:
            return state
    }
    
}

export default productReducer;