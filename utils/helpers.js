import { 
    INPUT_EMAIL, 
    INPUT_PASSWORD 
} from '../utils/constants'

export const loginFormInitial = {
    email: " ",
    password: " "
  }
  
export const loginFormReducer = (state = formInitial, { type, payload }) => {
    switch (type) {
      case INPUT_EMAIL:
        return { ...state, email: payload }
      case INPUT_PASSWORD:
        return { ...state, password: payload }
    default:
      return state
    }
  }