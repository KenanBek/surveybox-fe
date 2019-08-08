import { combineReducers } from 'redux';
import C from '../constants';


export const surveys = (state = [], action) => {
  switch (action.type) {
  case C.FETCH_SURVEY:
    return action.payload;
  case C.EDIT_SURVEY:
    return action.payload;
  case C.PREVIEW_SURVEY:
    return action.payload;
  case C.SUBMIT_SURVEY:
    return action.payload;
  default:
    return state;
  }
};


export const errors = (state = [], action) => {
  switch (action.type) {
  case C.ADD_ERROR:
    return [
      ...state,
      action.payload,
    ];
  case C.CLEAR_ERROR:
    return state.filter((message, i) => i !== action.payload);
  default:
    return state;
  }
};


export default combineReducers({
  surveys,
  errors,
});
