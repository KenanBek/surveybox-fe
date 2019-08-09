import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import * as actions from './actions';
import C from './constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('actions', () => {
  it('should create an action to add an error', () => {
    const text = 'error1';
    const expectedAction = {
      type: C.ADD_ERROR,
      payload: text,
    };
    expect(actions.addError(text)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    axiosMock.restore();
  });

  it('creates FETCH_SURVEY_LIST when fetching surveys has been done', () => {
    axiosMock.onGet('api/v1/surveys/').reply(200, {
      results: [],
    });

    const store = mockStore({});
    const expectedActions = [
      C.FETCH_SURVEY_LIST,
    ];

    return store.dispatch(actions.fetchSurveyList())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
  });

  it('creates ADD_ERROR when there is 500 for fetching surveys', () => {
    axiosMock.onGet('api/v1/surveys/').reply(500);

    const store = mockStore({});
    const expectedActions = [{
      type: C.ADD_ERROR,
      payload: 'connect ECONNREFUSED 127.0.0.1:80',
    }];

    return store.dispatch(actions.fetchSurveyList())
      .then(() => {
        const actualActions = store.getActions().map(action => action);
        expect(actualActions).toEqual(expectedActions);
      });
  });
});
