import { combineReducers } from "redux";
import ticketReducer from "./ticketReducer";
import shopkartReducer from "./shopkartReducer";
import promoReducer from "./promoReducer";
import productReducer from "./productReducer";
import menuReducer from "./menuReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  menus: menuReducer,
  promos: promoReducer,
  shopkart: shopkartReducer,
  tickets: ticketReducer,
});

export default rootReducer;
