import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListSurveys = ({ surveys }) => (
  <div className="container">
    <div className="row">
      {(surveys && surveys.length) ? surveys.map(survey => (
        <div key={survey.id} className="col-sm-12 col-md-4 col-lg-3">
          <Link to={`/survey/${survey.id}`}>
            <div className="card text-white bg-primary mb-3">
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
      )) : <div className="col-sm-12 col-md-4 col-lg-3">no surveys</div>}
    </div>
  </div>
);

ListSurveys.propTypes = {
  surveys: PropTypes.arrayOf(PropTypes.any),
};
ListSurveys.defaultProps = {
  surveys: [],
};

export default ListSurveys;
