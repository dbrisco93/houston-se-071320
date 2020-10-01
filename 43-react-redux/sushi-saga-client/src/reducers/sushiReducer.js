const initialState = {
  sushis: [],
  eaten: [],
  offset: 0,
  wallet: 100
}

const sushiReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_SUSHI':
      return {
        ...state,
        sushis: action.sushis
      }

    case 'MORE_SUSHI':
      return {
        ...state,
        offset: action.offset
      }

    case 'EAT_SUSHI':
      return {
        ...state,
        eaten: action.eaten,
        wallet: action.wallet
      }

    default:
      return state
  }
}

export default sushiReducer;
