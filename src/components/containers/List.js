import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import SurveyList from '../surveylist/SurveyList';
import { fetchSurveyList } from '../../actions';

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
  loadSurveys: () => dispatch(fetchSurveyList()),
});

List.propTypes = {
  surveysList: PropTypes.arrayOf(PropTypes.object),
  loadSurveys: PropTypes.func.isRequired,
};
List.defaultProps = {
  surveysList: [],
};

const connector = connect(mapStateToProps, mapDispatchToProps)(List);
export default withRouter(connector);
