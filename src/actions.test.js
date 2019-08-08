import * as actions from './actions';
import C from './constants';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'error1';
    const expectedAction = {
      type: C.ADD_ERROR,
      payload: text,
    };
    expect(actions.addError(text)).toEqual(expectedAction);
  });
});
