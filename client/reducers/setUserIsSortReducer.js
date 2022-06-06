const setUserIsSortReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_IS_SORT':
      return action.payload || {}
    default :
      return state
  }
};

export default setUserIsSortReducer;