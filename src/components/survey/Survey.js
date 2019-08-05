import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from 'react-jsonschema-form';

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schema: null,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const schema = (await axios.get(`/api/v1/surveys/${id}/`)).data.questions;
    this.setState({
      schema,
    });
  }

  render() {
    const { schema } = this.state;
    const log = type => console.log.bind(console, type);

    if (schema != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <Form
                schema={schema}
                onChange={log('changed')}
                onSubmit={log('submitted')}
                onError={log('errors')}
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <p>Loading...</p>
    );
  }
}

Survey.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default Survey;
