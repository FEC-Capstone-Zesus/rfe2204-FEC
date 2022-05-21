const getRelatedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RELATEDPRODUCTS':
      return action.relatedProducts || []
    default :
      return state
  }
};

export default getRelatedProductsReducer;
