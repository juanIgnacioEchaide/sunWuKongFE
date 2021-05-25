import { 
  REQUEST_TICKETS_LOADING, 
  REQUEST_TICKETS_ERROR, 
  REQUEST_TICKETS_SUCCESS, 
  ADD_PRODUCT_TO_SHOP_KART,
  CLEAR_SHOP_KART,
  REQUEST_PROMOS_LOADING, 
  REQUEST_PROMOS_ERROR, 
  REQUEST_PROMOS_SUCCESS, 
  REQUEST_MENUS_LOADING,
  REQUEST_MENUS_ERROR,
  REQUEST_MENUS_SUCCESS,
  REQUEST_USER_LOADING,
  REQUEST_USER_ERROR,
  REQUEST_USER_SUCCESS,
  REQUEST_PRODUCTS_LOADING,
  REQUEST_PRODUCTS_ERROR,
  REQUEST_PRODUCTS_SUCCESS,
} from './actionTypes'

/* Ticket */
export const requestTicketsLoading = payload => {
    return {
      type: REQUEST_TICKETS_LOADING,
      payload: null
    }
  };
  
export const requestTicketsError = payload => {
    return {
      type: REQUEST_TICKETS_ERROR,
      payload
    }
  };
  
export const requestTicketsSuccess = payload => {
    return {
      type: REQUEST_TICKETS_SUCCESS,
      payload
    }
  };

  /* Promo */
export const requestPromosLoading = payload => {
    return {
      type: REQUEST_PROMOS_LOADING,
      payload: null
    }
  };
  
export const requestPromosError = payload => {
    return {
      type: REQUEST_PROMOS_ERROR,
      payload
    }
  };
  
export const requestPromosSuccess = payload => {
    return {
      type: REQUEST_PROMOS_SUCCESS,
      payload
    }
  };

  /* Menu */
export const requestMenusLoading = payload => {
    return {
      type: REQUEST_MENUS_LOADING,
      payload: null
    }
  };
  
export const requestMenusError = payload => {
    return {
      type: REQUEST_MENUS_ERROR,
      payload
    }
  };
  
export const requestMenusSuccess = payload => {
    return {
      type: REQUEST_MENUS_SUCCESS,
      payload
    }
  };

    /* User */
export const requestUserLoading = payload => {
  return {
    type: REQUEST_USER_LOADING,
    payload: null
  }
};

export const requestUserError = payload => {
  return {
    type: REQUEST_USER_ERROR,
    payload
  }
};

export const requestUserSuccess = payload => {
  return {
    type: REQUEST_USER_SUCCESS,
    payload
  }
};

  /* Product */
export const requestProductsLoading = payload => {
    return {
      type: REQUEST_PRODUCTS_LOADING,
      payload: null
    }
  };
  

export const requestProductsError = payload => {
    return {
      type: REQUEST_PRODUCTS_ERROR,
      payload
    }
  };
  
export const requestProductsSuccess = payload => {
    return {
      type: REQUEST_PRODUCTS_SUCCESS,
      payload
    }
  };

    /* Shop Kart */
export const addProductToKart = payload => {
  return {
    type: ADD_PRODUCT_TO_SHOP_KART,
    payload
  }
}

export const clearKart = payload => {
  return {
    type: CLEAR_SHOP_KART,
    payload
  }
}
