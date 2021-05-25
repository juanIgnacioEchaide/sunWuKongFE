import { 
    ADD_PRODUCT_TO_SHOP_KART, 
    DELETE_PRODUCT_FROM_SHOP_KART, 
    CLEAR_SHOP_KART
 } from '../actionTypes'

const initialState = {
        products: [],
        price: null
    }

const shopkartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_TO_SHOP_KART:
            return { ...state, products: [...state.products, ...payload] }
        case DELETE_PRODUCT_FROM_SHOP_KART:
            return { ...state, loading: false, error: payload }
        case CLEAR_SHOP_KART:
            return { loading: false, products: [] }
        default:
            return state
    }
}

export default shopkartReducer;