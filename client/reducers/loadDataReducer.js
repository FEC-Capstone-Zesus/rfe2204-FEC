const loadDataReducer = (state = 0, action) => {
  switch (action.type) {
    case 'START':
      return 1
    case 'STOP':
      return 0
    default :
      return state
  }
};

export default loadDataReducer;
