const setImagesArrayReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGES_ARRAY':
      return action.imagesArray || []
    default :
      return state
  }
};

export default setImagesArrayReducer;