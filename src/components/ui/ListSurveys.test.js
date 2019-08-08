import React from 'react';
import { shallow } from 'enzyme';
import ListSurveys from './ListSurveys';

jest.mock('axios');

describe('ListSurveys component', () => {
  describe('when rendered', () => {
    it('renders without crashing', () => {
      shallow(
        <ListSurveys />,
      );
    });
  });
});
