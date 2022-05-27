const setMainImageReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MAIN_IMAGE':
      return action.mainImage || ''
    default :
      return state
  }
};

export default setMainImageReducer;