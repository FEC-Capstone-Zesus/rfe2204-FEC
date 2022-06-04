const setNewFilterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NEW_FILTER':
      return action.payload || {}
    default :
      return state
  }
};

export default setNewFilterReducer;