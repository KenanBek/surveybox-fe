import React, { Component } from 'react';
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
    const schema = (await axios.get('/api/v1/surveys/10/')).data.questions;
    this.setState({
      schema,
    });
  }

  render() {
    const { schema } = this.state;
    const log = type => console.log.bind(console, type);

    if (schema != null) {
      return (
        <div>
          <p>{process.env.REACT_APP_BE_URL}</p>
          <Form
            schema={schema}
            onChange={log('changed')}
            onSubmit={log('submitted')}
            onError={log('errors')}
          />
        </div>
      );
    }
    return (
      <p>Loading...</p>
    );
  }
}

export default Survey;
