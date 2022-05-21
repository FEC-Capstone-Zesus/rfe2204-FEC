const getStylesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_STYLES':
      return action.styles || {}
    default :
      return state
  }
};

export default getStylesReducer;
