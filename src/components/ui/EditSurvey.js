import React from 'react';
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class EditSurvey extends React.Component {
  state = {
    showPreview: false,
  };

  submit = ({ formData }, e) => {
    const { onPreview, survey } = this.props;

    e.preventDefault();
    onPreview(survey, formData);

    this.setState({
      showPreview: true,
    });
  };

  render() {
    const { questions } = this.props;
    const { showPreview } = this.state;

    if (showPreview) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <Form
              schema={questions}
              onSubmit={this.submit}
            />
          </div>
        </div>
      </div>
    );
  }
};

EditSurvey.propTypes = {
  survey: PropTypes.objectOf(PropTypes.any),
  questions: PropTypes.objectOf(PropTypes.any),
  onPreview: PropTypes.func.isRequired,
};
EditSurvey.defaultProps = {
  survey: {},
  questions: {},
};

export default EditSurvey;
