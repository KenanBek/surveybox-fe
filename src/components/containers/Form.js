import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import EditSurvey from '../ui/EditSurvey';
import { fetchSurveyItem, previewSurvey } from '../../actions';

class Form extends Component {
  componentDidMount() {
    const { getSurvey } = this.props;
    getSurvey();
  }

  render() {
    const { survey, questions } = this.props;
    const { onPreview } = this.props;

    return (
      <div>
        { questions ? (
          <EditSurvey survey={survey} questions={questions} onPreview={onPreview} />
        ) : (
          <p>Loading survey data...</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  survey: state.surveys.survey,
  questions: state.surveys.questions,
});

const mapDispatchToProps = (dispatch, props) => ({
  getSurvey: () => {
    dispatch(fetchSurveyItem(props.match.params.id));
  },
  onPreview: (survey, answers) => {
    dispatch(previewSurvey(survey, answers));
  },
});

Form.propTypes = {
  survey: PropTypes.objectOf(PropTypes.any),
  questions: PropTypes.objectOf(PropTypes.any),
  getSurvey: PropTypes.func,
  onPreview: PropTypes.func,
};
Form.defaultProps = {
  survey: {},
  questions: undefined,
  getSurvey: f => f,
  onPreview: f => f,
};

const connector = connect(mapStateToProps, mapDispatchToProps)(Form);
export default withRouter(connector);
