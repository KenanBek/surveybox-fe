import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class PreviewSurvey extends React.Component {
  state = {
    redirectToHome: false,
  };

  submit = () => {
    const { onSubmit, survey, answers } = this.props;

    onSubmit(survey, answers);

    this.setState({
      redirectToHome: true,
    });
  };

  render() {
    const { survey, answers } = this.props;
    const { redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect to="/" />;
    }

    let previewAnswers;
    if (typeof answers === 'string') {
      previewAnswers = (
        <div>
          <p>{answers}</p>
        </div>
      );
    } else if (typeof answers === 'object') {
      previewAnswers = Object.keys(answers).map(key => (
        <dl>
          <dt>{key}</dt>
          <dd>{answers[key]}</dd>
        </dl>
      ));
    }
    window.answers = answers;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <h1>{survey.title}</h1>
            <h6>{survey.description}</h6>
            <div>
              {previewAnswers}
            </div>
            <div>
              <button type="submit" className="btn btn-info" onClick={this.submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PreviewSurvey.propTypes = {
  survey: PropTypes.objectOf(PropTypes.any).isRequired,
  // we might have single field surveys which will end up
  // as a string or number (not object)
  answers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PreviewSurvey;
