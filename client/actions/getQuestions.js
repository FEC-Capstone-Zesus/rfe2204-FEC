const getQuestions = (questions) => (
  {
    type : 'GET_QUESTIONS',
    questions : questions
  }
);

export default getQuestions;