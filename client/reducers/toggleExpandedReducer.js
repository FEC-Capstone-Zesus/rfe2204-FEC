const toggleExpandedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_EXPANDED':
      return action.expanded
    default :
      return state
  }
};

export default toggleExpandedReducer;