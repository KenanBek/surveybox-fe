import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Survey from './Survey';

jest.mock('axios');

describe('Survey component', () => {
  describe('when rendered', () => {
    it('should fetch a survey', () => {
      const getSpy = jest.spyOn(axios, 'get');

      const baseProps = {
        match: {
          params: {
            id: 1,
          },
        },
      };
      shallow(
        <Survey {...baseProps} />,
      );

      expect(getSpy).toBeCalled();
    });
  });
});
