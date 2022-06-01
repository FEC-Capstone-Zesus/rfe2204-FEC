const getMetaDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_METADATA':
      return action.metaData || {}
    default :
      return state
  }
};

export default getMetaDataReducer;
