import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SurveyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveys: null,
    };
  }

  async componentDidMount() {
    const surveys = (await axios.get('/api/v1/surveys/')).data.results;
    this.setState({
      surveys,
    });
  }

  render() {
    const { surveys } = this.state;

    return (
      <div className="container">
        <div className="row">
          {
            surveys === null && <p>Loading surveys...</p>
          }
          {
            (surveys != null && surveys.length === 0) && <p>0 surveys create one via API</p>
          }
          {
            surveys && surveys.map(survey => (
              <div key={survey.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/survey/${survey.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                      Answers:
                      {survey.answers}
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{survey.title}</h4>
                      <p className="card-text">{survey.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default SurveyList;
