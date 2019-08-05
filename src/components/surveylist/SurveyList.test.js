import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import SurveyList from './SurveyList';

jest.mock('axios');

describe('SurveyList component', () => {
  describe('when rendered', () => {
    it('should fetch a list of surveys', () => {
      const getSpy = jest.spyOn(axios, 'get');
      shallow(
        <SurveyList />,
      );
      expect(getSpy).toBeCalled();
    });
  });
});
