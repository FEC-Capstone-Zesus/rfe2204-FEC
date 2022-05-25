const setCurrentStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STYLE':
      return action.currentStyle || {}
    default :
      return state
  }
};

export default setCurrentStyleReducer;
