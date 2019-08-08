import axios from 'axios';
import C from './constants';

export const addError = error => ({
  type: C.ADD_ERROR,
  payload: error,
});

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index,
});

export const fetchSurveyList = () => (dispatch) => {
  axios.get('/api/v1/surveys/')
    .then((response) => {
      dispatch({
        type: C.FETCH_SURVEY_LIST,
        payload: {
          surveys: response.data.results,
        },
      });
    })
    .catch((error) => {
      addError(error);
    });
};

export const fetchSurveyItem = id => (dispatch) => {
  axios.get(`/api/v1/surveys/${id}/`)
    .then((response) => {
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
    })
    .catch((error) => {
      addError(error);
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

export const submitSurvey = (survey, answers) => (dispatch) => {
  const data = {
    survey: survey.id,
    results: answers,
  };
  axios.post('/api/v1/answers/', data)
    .then(() => {
      dispatch({
        type: C.SUBMIT_SURVEY,
        payload: {
          survey,
          answers,
        },
      });
    })
    .catch((error) => {
      addError(error);
    });
};

export default undefined;
