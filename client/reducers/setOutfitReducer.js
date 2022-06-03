const setOutfitReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OUTFIT':
      return action.outfit || []
    default :
      return state
  }
};

export default setOutfitReducer;
