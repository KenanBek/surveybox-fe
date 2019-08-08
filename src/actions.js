import axios from 'axios';
import C from './constants';


export const fetchAllSurveys = () => async (dispatch) => {
  const response = await axios.get('/api/v1/surveys/');
  dispatch({
    type: C.FETCH_SURVEY,
    payload: {
      surveysList: response.data.results,
    },
  });
};

export const submitSurvey = survey => (dispatch) => {
  console.log(survey);

  dispatch({
    type: C.SUBMIT_SURVEY,
    payload: {
      survey,
    },
  });
};


export default undefined;
