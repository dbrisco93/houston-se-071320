const initialState = {
  username: '',
  token: '',
  logged_in: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN':
      return {
        ...state
      }

    case 'USER_PROFILE':
      return {
        ...state
      }

    case 'LOGOUT':
      return {
        ...state
      }

    default:
      return state
  }
}

export default userReducer;
