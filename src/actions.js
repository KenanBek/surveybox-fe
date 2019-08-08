import axios from 'axios';
import C from './constants';

export const fetchSurveyList = () => async (dispatch) => {
  const response = await axios.get('/api/v1/surveys/');

  dispatch({
    type: C.FETCH_SURVEY_LIST,
    payload: {
      surveys: response.data.results,
    },
  });
};

export const fetchSurveyItem = id => async (dispatch) => {
  const response = await axios.get(`/api/v1/surveys/${id}/`);

  dispatch({
    type: C.FETCH_SURVEY_ITEM,
    payload: {
      survey: {
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
      },
      questions: response.data.questions,
    },
  });
};

export const previewSurvey = (survey, answers) => (dispatch) => {
  dispatch({
    type: C.PREVIEW_SURVEY,
    payload: {
      survey,
      answers,
    },
  });
};

export const submitSurvey = (survey, answers) => async (dispatch) => {
  try {
    const data = {
      survey: survey.id,
      results: answers,
    };
    await axios.post('/api/v1/answers/', data);

    dispatch({
      type: C.SUBMIT_SURVEY,
      payload: {
        survey,
        answers,
      },
    });
  } catch (error) {
    dispatch({
      type: C.ADD_ERROR,
      payload: error,
    });
  }
};

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index,
});

export default undefined;
