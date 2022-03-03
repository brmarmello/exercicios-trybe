const initialState = [];

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_CUSTOMER':
    return [...state, action.data];
  case 'DELETE_CUSTOMER':
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default registerReducer;
