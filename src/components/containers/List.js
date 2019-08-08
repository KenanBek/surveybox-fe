import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import ListSurveys from '../ui/ListSurveys';
import { fetchSurveyList } from '../../actions';

class List extends Component {
  componentDidMount() {
    const { loadSurveys } = this.props;
    loadSurveys();
  }

  render() {
    const { surveys } = this.props;

    if (!surveys.length) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <ListSurveys surveys={surveys} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys.surveys,
});

const mapDispatchToProps = dispatch => ({
  loadSurveys: () => dispatch(fetchSurveyList()),
});

List.propTypes = {
  surveys: PropTypes.arrayOf(PropTypes.object),
  loadSurveys: PropTypes.func.isRequired,
};
List.defaultProps = {
  surveys: [],
};

const connector = connect(mapStateToProps, mapDispatchToProps)(List);
export default withRouter(connector);
