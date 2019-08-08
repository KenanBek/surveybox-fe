import axios from 'axios';
import C from './constants';

export const fetchSurveyList = () => async (dispatch) => {
  const response = await axios.get('/api/v1/surveys/');
  dispatch({
    type: C.FETCH_SURVEY_LIST,
    payload: {
      surveysList: response.data.results,
    },
  });
};

export const fetchSurveyItem = id => async (dispatch) => {
  const response = await axios.get(`/api/v1/surveys/${id}/?format=json`);
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

export const submitSurvey = survey => (dispatch) => {
  dispatch({
    type: C.SUBMIT_SURVEY,
    payload: {
      survey,
    },
  });
};

export default undefined;
