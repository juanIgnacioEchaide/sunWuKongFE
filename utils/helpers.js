export const loginFormInitial = {
    email: " ",
    password: " "
  }
  
export const loginFormReducer = (state = formInitial, { type, payload }) => {
    switch (type) {
      case 'HANDLE INPUT EMAIL':
        return { ...state, ...payload }
      case 'HANDLE INPUT PASSWORD':
        return { ...state, ...payload }
    default:
      return state
    }
  }