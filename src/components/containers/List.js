import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import SurveyList from '../surveylist/SurveyList';
import { fetchAllSurveys } from '../../actions';

class List extends Component {
  componentDidMount() {
    const { loadSurveys } = this.props;
    loadSurveys();
  }

  render() {
    const { surveysList } = this.props;

    return (
      <div>
        <SurveyList surveysList={surveysList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  surveysList: state.surveys.surveysList,
});

const mapDispatchToProps = dispatch => ({
  loadSurveys: () => dispatch(fetchAllSurveys()),
});

List.propTypes = {
  surveysList: PropTypes.arrayOf(PropTypes.object),
  loadSurveys: PropTypes.func.isRequired,
};
List.defaultProps = {
  surveysList: [],
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
