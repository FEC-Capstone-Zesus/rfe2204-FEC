const getQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return action.questions || []
    default :
      return state
  }
};

export default getQuestionsReducer;
