import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import PreviewSurvey from '../ui/PreviewSurvey';
import { submitSurvey } from '../../actions';

const Preview = ({ survey, answers, onSubmit = f => f }) => (
  <div>
    {!survey ? (
      <Redirect to="/" />
    ) : (
      <div>
        <PreviewSurvey survey={survey} answers={answers} onSubmit={onSubmit} />
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  survey: state.surveys.survey,
  answers: state.surveys.answers,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (survey, answers) => {
    dispatch(submitSurvey(survey, answers));
  },
});

Preview.propTypes = {
  survey: PropTypes.objectOf(PropTypes.any),
  answers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onSubmit: PropTypes.func,
};
Preview.defaultProps = {
  survey: undefined,
  answers: {},
  onSubmit: f => f,
};

const connector = connect(mapStateToProps, mapDispatchToProps)(Preview);
export default withRouter(connector);
