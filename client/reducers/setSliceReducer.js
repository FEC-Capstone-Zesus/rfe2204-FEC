const setSliceReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SLICE':
      return action.slice || []
    default :
      return state
  }
};

export default setSliceReducer;